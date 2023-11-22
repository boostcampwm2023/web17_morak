import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../libs/utils/prisma.service';
import { Member, Mogaco } from '@prisma/client';
import { MogacoStatus } from './dto/mogaco-status.enum';
import { CreateMogacoDto, MogacoDto } from './dto';

@Injectable()
export class MogacoRepository {
  constructor(private prisma: PrismaService) {}

  async getAllMogaco(): Promise<Mogaco[]> {
    return this.prisma.mogaco.findMany({
      where: { deletedAt: null },
    });
  }

  async getMogacoById(id: number): Promise<MogacoDto> {
    const mogaco = await this.prisma.mogaco.findUnique({
      where: { id, deletedAt: null },
    });

    if (!mogaco) {
      throw new NotFoundException(`Mogaco with id ${id} not found`);
    }

    return {
      id: mogaco.id,
      groupId: mogaco.groupId,
      title: mogaco.title,
      contents: mogaco.contents,
      date: mogaco.date,
      maxHumanCount: mogaco.maxHumanCount,
      address: mogaco.address,
      status: mogaco.status,
    };
  }

  async createMogaco(createMogacoDto: CreateMogacoDto, member: Member): Promise<Mogaco> {
    try {
      const { groupId, title, contents, maxHumanCount, address, date } = createMogacoDto;

      const mogaco = await this.prisma.mogaco.create({
        data: {
          groupId,
          title,
          contents,
          maxHumanCount,
          address,
          status: MogacoStatus.RECRUITING,
          date: new Date(date),
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

  async updateMogacoStatus(mogaco: MogacoDto): Promise<Mogaco> {
    try {
      return await this.prisma.mogaco.update({
        where: { id: mogaco.id },
        data: { status: mogaco.status },
      });
    } catch (error) {
      throw new Error(`Failed to update Mogaco status: ${error.message}`);
    }
  }
}
