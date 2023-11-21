import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MogacoService } from './mogaco.service';
import { Mogaco } from '@prisma/client';
import { CreateMogacoDto, MogacoDto } from './dto';
import { MogacoStatusValidationPipe } from './pipes/mogaco-status-validation.pipe';
import { MogacoStatus } from './dto/mogaco-status.enum';

@Controller('mogaco')
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
  async createMogaco(@Body() createMogacoDto: CreateMogacoDto): Promise<Mogaco> {
    return this.mogacoService.createMogaco(createMogacoDto);
  }

  @Delete('/:id')
  async deleteMogaco(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.mogacoService.deleteMogaco(id);
  }

  @Patch('/:id/status')
  updateMogacoStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', MogacoStatusValidationPipe) status: MogacoStatus,
  ): Promise<Mogaco> {
    return this.mogacoService.updateMogacoStatus(id, status);
  }
}
