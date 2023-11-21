import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../libs/utils/prisma.service';
import { Mogaco } from '@prisma/client';

@Injectable()
export class MogacoRepository {
  constructor(private prisma: PrismaService) {}

  async getAllMogaco(): Promise<Mogaco[]> {
    return this.prisma.mogaco.findMany();
  }

  async getMogacoById(id: number): Promise<Mogaco> {
    return this.prisma.mogaco.findUnique({
      where: { id },
    });
  }
}
