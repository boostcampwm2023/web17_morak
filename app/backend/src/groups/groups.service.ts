import { Injectable } from '@nestjs/common';
import { GroupsRepository } from './groups.repository';
import { Group, Member } from '@prisma/client';
import { MemberInformationDto } from 'src/member/dto/member.dto';

@Injectable()
export class GroupsService {
  constructor(private groupsRepository: GroupsRepository) {}

  async getAllGroups(): Promise<Group[]> {
    return this.groupsRepository.getAllGroups();
  }

  async getAllMembersOfGroup(id: number): Promise<MemberInformationDto[]> {
    return this.groupsRepository.getAllMembersOfGroup(id);
  }

  async joinGroup(id: number, member: Member): Promise<void> {
    return this.groupsRepository.joinGroup(id, member);
  }

  async leaveGroup(id: number, member: Member): Promise<void> {
    return this.groupsRepository.leaveGroup(id, member);
  }

  async getMyGroups(member: Member): Promise<Group[]> {
    return this.groupsRepository.getMyGroups(member);
  }
}
