import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MogacoService } from './mogaco.service';
import { Mogaco } from '@prisma/client';

@Controller('mogaco')
export class MogacoController {
  constructor(private readonly mogacoService: MogacoService) {}

  @Get('/')
  async getAllMogaco(): Promise<Mogaco[]> {
    return this.mogacoService.getAllMogaco();
  }

  @Get('/:id')
  async getMogacoById(@Param('id', ParseIntPipe) id: number): Promise<Mogaco> {
    return this.mogacoService.getMogacoById(id);
  }
}
