import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Member, Mogaco } from '@prisma/client';
import { MogacoStatus } from './enum/mogaco-status.enum';
import { MogacoDto, MogacoWithMemberDto } from './dto/response-mogaco.dto';
import { CreateMogacoDto } from './dto/create-mogaco.dto';
import { ParticipantResponseDto } from './dto/response-participants.dto';

@Injectable()
export class MogacoRepository {
  constructor(private prisma: PrismaService) {}

  async getAllMogaco(member: Member): Promise<MogacoDto[]> {
    const userGroups = await this.prisma.groupToUser.findMany({
      where: { userId: member.id },
      select: { groupId: true },
    });

    const userGroupIds = userGroups.map((group) => group.groupId);

    const mogacos = await this.prisma.mogaco.findMany({
      where: {
        deletedAt: null,
        groupId: {
          in: userGroupIds,
        },
      },
      include: {
        group: true,
      },
    });

    return mogacos.map((mogaco) => ({
      id: mogaco.id.toString(),
      groupId: mogaco.group.id.toString(),
      title: mogaco.title,
      contents: mogaco.contents,
      date: mogaco.date,
      maxHumanCount: mogaco.maxHumanCount,
      address: mogaco.address,
      latitude: Number(mogaco.latitude),
      longitude: Number(mogaco.longitude),
      status: mogaco.status,
      createdAt: mogaco.createdAt,
      updatedAt: mogaco.updatedAt,
      deletedAt: mogaco.deletedAt,
      group: {
        id: mogaco.group.id.toString(),
        title: mogaco.group.title,
      },
    }));
  }

  async getMogacoByDate(date: string): Promise<MogacoDto[]> {
    let startDate: Date;
    let endDate: Date;

    // 231129 ldhbenecia | 사용자가 날짜만 입력한 경우 (e.g., '2023-11')
    if (date.length === 7) {
      startDate = new Date(`${date}-01T00:00:00.000Z`);
      endDate = new Date(`${date}-31T23:59:59.999Z`);
    } else {
      // 231129 ldhbenecia | 사용자가 날짜와 일자를 입력한 경우 (e.g., '2023-11-25')
      startDate = new Date(`${date}T00:00:00.000Z`);
      endDate = new Date(`${date}T23:59:59.999Z`);
    }

    const mogacos = await this.prisma.mogaco.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        group: true,
      },
    });

    if (!mogacos) {
      throw new NotFoundException(`No Mogaco events found for the date ${date}`);
    }

    return mogacos.map((mogaco) => ({
      id: mogaco.id.toString(),
      groupId: mogaco.group.id.toString(),
      title: mogaco.title,
      contents: mogaco.contents,
      date: mogaco.date,
      maxHumanCount: mogaco.maxHumanCount,
      address: mogaco.address,
      latitude: Number(mogaco.latitude),
      longitude: Number(mogaco.longitude),
      status: mogaco.status,
      createdAt: mogaco.createdAt,
      updatedAt: mogaco.updatedAt,
      deletedAt: mogaco.deletedAt,
      group: {
        id: mogaco.group.id.toString(),
        title: mogaco.group.title,
      },
    }));
  }

  async getMogacoById(id: number): Promise<MogacoWithMemberDto> {
    const mogaco = await this.prisma.mogaco.findUnique({
      where: { id, deletedAt: null },
      include: {
        member: true,
        group: true,
      },
    });

    if (!mogaco) {
      throw new NotFoundException(`Mogaco with id ${id} not found`);
    }

    const participants = await this.getParticipants(id);

    const participantsDto = participants.map((participant) => ({
      id: participant.id.toString(),
      providerId: participant.providerId,
      email: participant.email,
      nickname: participant.nickname,
      profilePicture: participant.profilePicture,
    }));

    return {
      id: mogaco.id.toString(),
      groupTitle: mogaco.group.title,
      title: mogaco.title,
      contents: mogaco.contents,
      date: mogaco.date,
      maxHumanCount: mogaco.maxHumanCount,
      address: mogaco.address,
      latitude: Number(mogaco.latitude),
      longitude: Number(mogaco.longitude),
      status: mogaco.status,
      member: {
        providerId: mogaco.member.providerId,
        email: mogaco.member.email,
        nickname: mogaco.member.nickname,
        profilePicture: mogaco.member.profilePicture,
      },
      participants: participantsDto,
    };
  }

  async createMogaco(createMogacoDto: CreateMogacoDto, member: Member): Promise<Mogaco> {
    try {
      const { groupId, title, contents, maxHumanCount, address, latitude, longitude, date } = createMogacoDto;

      const mogaco = await this.prisma.mogaco.create({
        data: {
          title,
          contents,
          maxHumanCount,
          address,
          latitude,
          longitude,
          status: MogacoStatus.RECRUITING,
          date: new Date(date),
          group: {
            connect: { id: Number(groupId) },
          },
          member: {
            connect: { id: Number(member.id) },
          },
        },
        include: {
          member: true,
        },
      });

      await this.prisma.participant.create({
        data: {
          postId: mogaco.id,
          userId: Number(member.id),
        },
      });

      return mogaco;
    } catch (error) {
      throw new Error(`Failed to create Mogaco: ${error.message}`);
    }
  }

  async deleteMogaco(id: number, member: Member): Promise<void> {
    const mogaco = await this.prisma.mogaco.findUnique({
      where: { id },
    });

    if (!mogaco) {
      throw new NotFoundException(`Mogaco with id ${id} not found`);
    }

    if (mogaco.memberId !== member.id) {
      throw new ForbiddenException(`You do not have permission to delete this Mogaco`);
    }

    await this.prisma.mogaco.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async updateMogaco(id: number, updateMogacoDto: CreateMogacoDto, member: Member): Promise<Mogaco> {
    const { title, contents, status, maxHumanCount, address, latitude, longitude, date } = updateMogacoDto;

    const mogaco = await this.prisma.mogaco.findUnique({
      where: { id },
    });

    if (!mogaco) {
      throw new NotFoundException(`Mogaco with id ${id} not found`);
    }

    if (mogaco.memberId !== member.id) {
      throw new ForbiddenException(`You do not have permission to update this Mogaco`);
    }

    try {
      return await this.prisma.mogaco.update({
        where: { id: mogaco.id },
        data: {
          title,
          contents,
          date: new Date(date),
          status,
          maxHumanCount,
          address,
          latitude,
          longitude,
        },
      });
    } catch (error) {
      throw new Error(`Failed to update Mogaco: ${error.message}`);
    }
  }

  async joinMogaco(id: number, member: Member): Promise<void> {
    const mogaco = await this.prisma.mogaco.findUnique({
      where: { id, deletedAt: null },
    });

    if (!mogaco) {
      throw new NotFoundException(`Mogaco with id ${id} not found`);
    }

    const existingParticipant = await this.prisma.participant.findUnique({
      where: {
        postId_userId: {
          postId: mogaco.id,
          userId: member.id,
        },
      },
    });

    if (existingParticipant) {
      throw new ForbiddenException(`Member with id ${member.id} is already participating in Mogaco with id ${id}`);
    }

    await this.prisma.participant.create({
      data: {
        postId: mogaco.id,
        userId: member.id,
      },
    });
  }

  async getParticipants(id: number): Promise<ParticipantResponseDto[]> {
    const participants = await this.prisma.participant.findMany({
      where: {
        postId: id,
      },
      include: {
        member: true,
      },
    });

    // 가져온 참가자 목록의 각 참가자의 member 속성을 통해 실제 멤버 객체로 매핑하여 반환
    return participants.map((participant) => ({
      id: participant.member.id.toString(),
      providerId: participant.member.providerId,
      email: participant.member.email,
      nickname: participant.member.nickname,
      profilePicture: participant.member.profilePicture,
      socialType: participant.member.socialType,
      createdAt: participant.member.createdAt,
    }));
  }

  async cancelMogacoJoin(id: number, member: Member): Promise<void> {
    const mogaco = await this.prisma.mogaco.findUnique({
      where: { id, deletedAt: null },
      include: {
        member: true,
      },
    });

    if (!mogaco) {
      throw new NotFoundException(`Mogaco with id ${id} not found`);
    }

    const participant = await this.prisma.participant.findUnique({
      where: {
        postId_userId: {
          postId: mogaco.id,
          userId: member.id,
        },
      },
    });

    if (!participant) {
      throw new NotFoundException(`Member with id ${member.id} is not participating in Mogaco with id ${id}`);
    }

    if (mogaco.memberId !== member.id && participant.userId !== member.id) {
      throw new ForbiddenException(`You do not have permission to cancel participation in this Mogaco`);
    }

    await this.prisma.participant.delete({
      where: {
        postId_userId: {
          postId: mogaco.id,
          userId: member.id,
        },
      },
    });
  }
}
