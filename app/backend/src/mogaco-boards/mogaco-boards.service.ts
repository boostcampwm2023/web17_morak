import { Injectable } from '@nestjs/common';
import { MogacoRepository } from './mogaco-boards.repository';
import { Member, Mogaco } from '@prisma/client';
import { MogacoDto, MogacoWithMemberDto } from './dto/response-mogaco.dto';
import { CreateMogacoDto } from './dto/create-mogaco.dto';
import { ParticipantResponseDto } from './dto/response-participants.dto';

@Injectable()
export class MogacoService {
  constructor(private mogacoRepository: MogacoRepository) {}

  async getAllMogaco(member: Member, page?: number): Promise<MogacoDto[]> {
    if (page) {
      return this.mogacoRepository.getAllMogaco(member, page);
    } else {
      return this.mogacoRepository.getAllMogaco(member);
    }
  }

  async getMogacoByDate(date: string, member: Member): Promise<MogacoDto[]> {
    return this.mogacoRepository.getMogacoByDate(date, member);
  }

  async getMyMogacos(member: Member): Promise<MogacoDto[]> {
    return this.mogacoRepository.getMyMogacos(member);
  }

  async getMogacoById(id: number, member: Member): Promise<MogacoWithMemberDto> {
    return this.mogacoRepository.getMogacoById(id, member);
  }

  async createMogaco(createMogaco: CreateMogacoDto, member: Member): Promise<Mogaco> {
    return this.mogacoRepository.createMogaco(createMogaco, member);
  }

  async deleteMogaco(id: number, member: Member): Promise<void> {
    return this.mogacoRepository.deleteMogaco(id, member);
  }

  async updateMogaco(id: number, updateMogacoDto: CreateMogacoDto, member: Member) {
    return this.mogacoRepository.updateMogaco(id, updateMogacoDto, member);
  }

  async joinMogaco(id: number, member: Member): Promise<void> {
    return await this.mogacoRepository.joinMogaco(id, member);
  }

  async getParticipants(id: number): Promise<ParticipantResponseDto[]> {
    return this.mogacoRepository.getParticipants(id);
  }

  async cancelMogacoJoin(id: number, member: Member): Promise<void> {
    return this.mogacoRepository.cancelMogacoJoin(id, member);
  }
}
