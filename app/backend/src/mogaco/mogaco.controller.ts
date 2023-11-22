import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { MogacoService } from './mogaco.service';
import { Member, Mogaco } from '@prisma/client';
import { CreateMogacoDto, MogacoDto } from './dto';
import { MogacoStatusValidationPipe } from './pipes/mogaco-status-validation.pipe';
import { MogacoStatus } from './dto/mogaco-status.enum';
import { GetUser } from 'libs/decorators/get-user.decorator';
import { AtGuard } from 'src/auth/guards/at.guard';

@Controller('mogaco')
@UseGuards(AtGuard)
export class MogacoController {
  constructor(private readonly mogacoService: MogacoService) {}

  @Get('/')
  async getAllMogaco(): Promise<Mogaco[]> {
    return this.mogacoService.getAllMogaco();
  }

  @Get('/:id')
  async getMogacoById(@Param('id', ParseIntPipe) id: number): Promise<MogacoDto> {
    return this.mogacoService.getMogacoById(id);
  }

  @Post('/')
  async createMogaco(@Body() createMogacoDto: CreateMogacoDto, @GetUser() member: Member): Promise<Mogaco> {
    return this.mogacoService.createMogaco(createMogacoDto, member);
  }

  @Delete('/:id')
  async deleteMogaco(@Param('id', ParseIntPipe) id: number, @GetUser() member: Member): Promise<void> {
    return this.mogacoService.deleteMogaco(id, member);
  }

  @Patch('/:id/status')
  updateMogacoStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', MogacoStatusValidationPipe) status: MogacoStatus,
  ): Promise<Mogaco> {
    return this.mogacoService.updateMogacoStatus(id, status);
  }
}
