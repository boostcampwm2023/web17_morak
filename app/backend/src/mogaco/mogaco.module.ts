import { Module } from '@nestjs/common';
import { MogacoService } from './mogaco.service';
import { MogacoController } from './mogaco.controller';
import { MogacoRepository } from './mogaco.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [MogacoController],
  providers: [MogacoService, MogacoRepository],
})
export class MogacoModule {}
