import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../libs/utils/prisma.service';
import { Member, Mogaco } from '@prisma/client';
import { MogacoStatus } from './dto/mogaco-status.enum';
import { CreateMogacoDto, MogacoDto } from './dto';

@Injectable()
export class MogacoRepository {
  constructor(private prisma: PrismaService) {}

  async getAllMogaco(): Promise<Mogaco[]> {
    return this.prisma.mogaco.findMany();
  }

  async getMogacoById(id: number): Promise<MogacoDto> {
    const mogaco = await this.prisma.mogaco.findUnique({
      where: { id },
    });

    if (!mogaco) {
      throw new NotFoundException(`Mogaco with id ${id} not found`);
    }

    return {
      id: mogaco.id,
      group_id: mogaco.group_id,
      title: mogaco.title,
      contents: mogaco.contents,
      date: mogaco.date,
      max_human_count: mogaco.max_human_count,
      address: mogaco.address,
      status: mogaco.status,
    };
  }

  async createMogaco(createMogacoDto: CreateMogacoDto, member: Member): Promise<Mogaco> {
    try {
      const { group_id, title, contents, max_human_count, address, date } = createMogacoDto;

      const mogaco = await this.prisma.mogaco.create({
        data: {
          group_id,
          title,
          contents,
          max_human_count,
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

      return mogaco;
    } catch (error) {
      throw new Error(`Failed to create Mogaco: ${error.message}`);
    }
  }

  async deleteMogaco(id: number): Promise<void> {
    const mogaco = await this.prisma.mogaco.findUnique({
      where: { id },
    });

    if (!mogaco) {
      throw new NotFoundException(`Mogaco with id ${id} not found`);
    }

    await this.prisma.mogaco.delete({
      where: { id },
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
