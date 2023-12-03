import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';

import { MogacoService } from './mogaco-boards.service';
import { MogacoController } from './mogaco-boards.controller';
import { MogacoRepository } from './mogaco-boards.repository';

@Module({
  imports: [AuthModule],
  controllers: [MogacoController],
  providers: [MogacoService, MogacoRepository],
})
export class MogacoModule {}
