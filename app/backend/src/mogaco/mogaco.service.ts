import { Injectable } from '@nestjs/common';
import { MogacoRepository } from './mogaco.repository';
import { Member, Mogaco } from '@prisma/client';
import { MogacoStatus } from './enum/mogaco-status.enum';
import { MogacoDto } from './dto/response-mogaco.dto';
import { CreateMogacoDto } from './dto/create-mogaco.dto';

@Injectable()
export class MogacoService {
  constructor(private mogacoRepository: MogacoRepository) {}

  async getAllMogaco(): Promise<Mogaco[]> {
    return this.mogacoRepository.getAllMogaco();
  }

  async getMogacoById(id: number): Promise<MogacoDto> {
    return this.mogacoRepository.getMogacoById(id);
  }

  async createMogaco(createMogaco: CreateMogacoDto, member: Member): Promise<Mogaco> {
    return this.mogacoRepository.createMogaco(createMogaco, member);
  }

  async deleteMogaco(id: number, member: Member): Promise<void> {
    return this.mogacoRepository.deleteMogaco(id, member);
  }

  async updateMogacoStatus(id: number, status: MogacoStatus): Promise<Mogaco> {
    const mogaco = await this.getMogacoById(id);
    mogaco.status = status;
    return this.mogacoRepository.updateMogacoStatus(mogaco);
  }

  async updateMogaco(id: number, updateMogacoDto: CreateMogacoDto, member: Member) {
    return this.mogacoRepository.updateMogaco(id, updateMogacoDto, member);
  }

  async joinMogaco(id: number, member: Member): Promise<void> {
    return await this.mogacoRepository.joinMogaco(id, member);
  }

  async getParticipants(id: number): Promise<Member[]> {
    return this.mogacoRepository.getParticipants(id);
  }

  async cancelMogacoJoin(id: number, member: Member): Promise<void> {
    return this.mogacoRepository.cancelMogacoJoin(id, member);
  }
}
