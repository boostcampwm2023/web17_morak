import { Injectable } from '@nestjs/common';
import { MogacoRepository } from './mogaco.repository';
import { Mogaco } from '@prisma/client';

@Injectable()
export class MogacoService {
  constructor(private mogacoRepository: MogacoRepository) {}

  async getAllMogaco(): Promise<Mogaco[]> {
    return this.mogacoRepository.getAllMogaco();
  }

  async getMogacoById(id: number): Promise<Mogaco> {
    return this.mogacoRepository.getMogacoById(id);
  }
}
