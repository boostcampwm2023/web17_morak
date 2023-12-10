import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AtStrategy, GoogleStrategy, RtStrategy } from './strategies';
import { AtGuard } from './guards/at.guard';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, GoogleStrategy, AtStrategy, RtStrategy, AtGuard],
  exports: [AuthService, JwtModule, AtStrategy, AtGuard],
})
export class AuthModule {}
