import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { MogacoService } from './mogaco.service';
import { Member, Mogaco } from '@prisma/client';
import { MogacoStatusValidationPipe } from './pipes/mogaco-status-validation.pipe';
import { MogacoStatus } from './enum/mogaco-status.enum';
import { GetUser } from 'libs/decorators/get-user.decorator';
import { AtGuard } from 'src/auth/guards/at.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MogacoDto, MogacoWithMemberDto } from './dto/response-mogaco.dto';
import { ParticipantResponseDto } from './dto/response-participants.dto';
import { CreateMogacoDto, StatusDto } from './dto/create-mogaco.dto';

@ApiTags('Mogaco API')
@Controller('mogaco')
@UseGuards(AtGuard)
@ApiBearerAuth('access_token')
export class MogacoController {
  constructor(private readonly mogacoService: MogacoService) {}

  @Get('/')
  @ApiOperation({
    summary: '모든 모각코 조회',
    description: '존재하는 모든 모각코를 조회합니다.\n 배열로 여러 개를 반환합니다.',
  })
  @ApiResponse({ status: 200, description: 'Successfully retrieved', type: [MogacoDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getAllMogaco(): Promise<Mogaco[]> {
    return this.mogacoService.getAllMogaco();
  }

  @Get('/:id')
  @ApiOperation({
    summary: '특정 게시물 조회',
    description: '특정 게시물의 Id 값으로 해당 게시물을 조회합니다.',
  })
  @ApiParam({ name: 'id', description: '조회할 모각코의 Id' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved', type: MogacoWithMemberDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getMogacoById(@Param('id', ParseIntPipe) id: number): Promise<MogacoDto> {
    return this.mogacoService.getMogacoById(id);
  }

  @Post('/')
  @ApiOperation({
    summary: '모각코 개설',
    description: '새로운 모각코를 개설합니다.',
  })
  @ApiBody({ type: CreateMogacoDto })
  @ApiResponse({ status: 201, description: 'Successfully created', type: MogacoWithMemberDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createMogaco(@Body() createMogacoDto: CreateMogacoDto, @GetUser() member: Member): Promise<Mogaco> {
    return this.mogacoService.createMogaco(createMogacoDto, member);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: '모각코 삭제',
    description: '특정 모각코를 삭제합니다.',
  })
  @ApiParam({ name: 'id', description: '삭제할 모각코의 Id' })
  @ApiResponse({ status: 200, description: 'Successfully deleted' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async deleteMogaco(@Param('id', ParseIntPipe) id: number, @GetUser() member: Member): Promise<void> {
    return this.mogacoService.deleteMogaco(id, member);
  }

  @Patch('/:id/status')
  @ApiOperation({
    summary: '모각코 상태 업데이트',
    description: '특정 모각코의 상태를 업데이트합니다.',
  })
  @ApiParam({ name: 'id', description: '상태를 업데이트할 모각코의 Id' })
  @ApiBody({ type: StatusDto })
  @ApiResponse({ status: 200, description: 'Successfully Updated', type: MogacoWithMemberDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  updateMogacoStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', MogacoStatusValidationPipe) status: MogacoStatus,
  ): Promise<Mogaco> {
    return this.mogacoService.updateMogacoStatus(id, status);
  }

  @Patch('/:id')
  @ApiOperation({
    summary: '모각코 수정',
    description: '특정 모각코를 수정합니다.',
  })
  @ApiParam({ name: 'id', description: '수정할 모각코의 Id' })
  @ApiBody({ type: CreateMogacoDto })
  @ApiResponse({ status: 200, description: 'Successfully updated', type: MogacoWithMemberDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async updateMogaco(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMogacoDto: CreateMogacoDto,
    @GetUser() member: Member,
  ): Promise<Mogaco> {
    return this.mogacoService.updateMogaco(id, updateMogacoDto, member);
  }

  @Post('/:id/join')
  @ApiOperation({
    summary: '모각코 참가',
    description: '특정 모각코에 참가합니다.',
  })
  @ApiParam({ name: 'id', description: '참가할 모각코의 Id' })
  @ApiResponse({ status: 201, description: 'Successfully join' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async joinMogaco(@Param('id', ParseIntPipe) id: number, @GetUser() member: Member): Promise<void> {
    return this.mogacoService.joinMogaco(id, member);
  }

  @Get('/:id/participants')
  @ApiOperation({
    summary: '참가자 목록 조회',
    description: '특정 모각코에 참가한 모든 참가자 목록을 조회합니다.',
  })
  @ApiParam({ name: 'id', description: '참가자 목록을 조회할 모각코의 Id' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved', type: [ParticipantResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getParticipants(@Param('id', ParseIntPipe) id: number): Promise<ParticipantResponseDto[]> {
    return this.mogacoService.getParticipants(id);
  }

  @Delete('/:id/join')
  @ApiOperation({
    summary: '모각코 참가 취소',
    description: '특정 모각코 참가를 취소합니다.',
  })
  @ApiParam({ name: 'id', description: '참가를 취소할 모각코의 Id' })
  @ApiResponse({ status: 200, description: 'Successfully cancelled join' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async cancelMogacoJoin(@Param('id', ParseIntPipe) id: number, @GetUser() member: Member): Promise<void> {
    return this.mogacoService.cancelMogacoJoin(id, member);
  }
}
