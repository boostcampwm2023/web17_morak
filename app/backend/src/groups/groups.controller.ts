import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GetUser } from 'libs/decorators/get-user.decorator';
import { Group, Member } from '@prisma/client';
import { AtGuard } from 'src/auth/guards/at.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParticipantResponseDto } from 'src/mogaco/dto/response-participants.dto';
import { GroupsDto } from './dto/groups.dto';
import { MemberInformationDto } from 'src/member/dto/member.dto';
import { CreateGroupsDto } from './dto/create-groups.dto';

@ApiTags('Group API')
@Controller('groups')
@UseGuards(AtGuard)
@ApiBearerAuth('access_token')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get('/')
  @ApiOperation({
    summary: '모든 그룹 조회',
    description: '존재하는 모든 그룹을 조회합니다.',
  })
  @ApiResponse({ status: 200, description: 'Successfully retrieved', type: [GroupsDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getAllGroups(): Promise<Group[]> {
    return this.groupsService.getAllGroups();
  }

  @Get('/:id/groups')
  @ApiOperation({
    summary: '특정 그룹 소속 인원 조회',
    description: '특정 그룹의 Id 값으로 해당 그룹의 소속 인원을 조회합니다.',
  })
  @ApiParam({ name: 'id', description: '조회할 그룹의 Id' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved', type: [ParticipantResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getAllMembersOfGroup(@Param('id', ParseIntPipe) id: number): Promise<MemberInformationDto[]> {
    return this.groupsService.getAllMembersOfGroup(id);
  }

  @Post('/')
  @ApiOperation({
    summary: '그룹 개설',
    description: '새로운 모각코를 개설합니다.',
  })
  @ApiBody({ type: CreateGroupsDto })
  @ApiResponse({ status: 201, description: 'Successfully created', type: CreateGroupsDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createGroups(@Body() createGroupsDto: CreateGroupsDto): Promise<Group> {
    return this.groupsService.createGroups(createGroupsDto);
  }

  @Post('/:id/join')
  @ApiOperation({
    summary: '그룹 참가',
    description: '특정 그룹에 참가합니다.',
  })
  @ApiParam({ name: 'id', description: '참가할 그룹의 Id' })
  @ApiResponse({ status: 201, description: 'Successfully join' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Group with id not found' })
  async joinGroup(@Param('id', ParseIntPipe) id: number, @GetUser() member: Member): Promise<void> {
    return this.groupsService.joinGroup(id, member);
  }

  @Delete('/:id/leave')
  @ApiOperation({
    summary: '그룹 참가 취소',
    description: '특정 그룹 참가를 취소합니다.',
  })
  @ApiParam({ name: 'id', description: '참가를 취소할 그룹의 Id' })
  @ApiResponse({ status: 200, description: 'Successfully leaved join' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Group with id not found' })
  async leaveGroup(@Param('id', ParseIntPipe) id: number, @GetUser() member: Member): Promise<void> {
    return this.groupsService.leaveGroup(id, member);
  }

  @Get('/my-groups')
  @ApiOperation({
    summary: '가입 그룹 확인',
    description: '해당 사용자가 가입한 그룹을 확인합니다.',
  })
  @ApiResponse({ status: 200, description: 'Successfully Check', type: [GroupsDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getMyGroups(@GetUser() member: Member): Promise<Group[]> {
    return this.groupsService.getMyGroups(member);
  }
}
