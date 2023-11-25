import { Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GetUser } from 'libs/decorators/get-user.decorator';
import { Group, Member } from '@prisma/client';
import { AtGuard } from 'src/auth/guards/at.guard';

@Controller('groups')
@UseGuards(AtGuard)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get('/')
  async getAllGroups(): Promise<Group[]> {
    return this.groupsService.getAllGroups();
  }

  @Get('/:id/groups')
  async getAllMembersOfGroup(@Param('id', ParseIntPipe) id: number): Promise<Member[]> {
    return this.groupsService.getAllMembersOfGroup(id);
  }

  @Post('/:id/join')
  async joinGroup(@Param('id', ParseIntPipe) id: number, @GetUser() member: Member): Promise<void> {
    return this.groupsService.joinGroup(id, member);
  }

  @Delete('/:id/leave')
  async leaveGroup(@Param('id', ParseIntPipe) id: number, @GetUser() member: Member): Promise<void> {
    return this.groupsService.leaveGroup(id, member);
  }
}
