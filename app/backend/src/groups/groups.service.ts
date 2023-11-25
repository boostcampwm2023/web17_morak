import { Injectable } from '@nestjs/common';
import { GroupsRepository } from './groups.repository';
import { Group, Member } from '@prisma/client';
import { GroupsDto } from './dto/groups.dto';

@Injectable()
export class GroupsService {
  constructor(private groupsRepository: GroupsRepository) {}

  async getAllGroups(): Promise<Group[]> {
    return this.groupsRepository.getAllGroups();
  }

  async getAllMembersOfGroup(id: number): Promise<Member[]> {
    return this.groupsRepository.getAllMembersOfGroup(id);
  }

  async createGroup(title: GroupsDto, member: Member): Promise<Group> {
    return this.groupsRepository.createGroup(title, member);
  }

  async joinGroup(id: number, member: Member): Promise<void> {
    return this.groupsRepository.joinGroup(id, member);
  }

  async leaveGroup(id: number, member: Member): Promise<void> {
    return this.groupsRepository.leaveGroup(id, member);
  }
}
