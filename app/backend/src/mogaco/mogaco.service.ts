import { Injectable } from '@nestjs/common';
import { MogacoRepository } from './mogaco.repository';
import { Mogaco } from '@prisma/client';
import { CreateMogacoDto, MogacoDto } from './dto';
import { MogacoStatus } from './dto/mogaco-status.enum';

@Injectable()
export class MogacoService {
  constructor(private mogacoRepository: MogacoRepository) {}

  async getAllMogaco(): Promise<Mogaco[]> {
    return this.mogacoRepository.getAllMogaco();
  }

  async getMogacoById(id: number): Promise<MogacoDto> {
    return this.mogacoRepository.getMogacoById(id);
  }

  async createMogaco(createMogaco: CreateMogacoDto): Promise<Mogaco> {
    return this.mogacoRepository.createMogaco(createMogaco);
  }

  async deleteMogaco(id: number): Promise<void> {
    return this.mogacoRepository.deleteMogaco(id);
  }

  async updateMogacoStatus(id: number, status: MogacoStatus): Promise<Mogaco> {
    const mogaco = await this.getMogacoById(id);
    mogaco.status = status;
    return this.mogacoRepository.updateMogacoStatus(mogaco);
  }
}
