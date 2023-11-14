import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { PrismaService } from '../../libs/utils/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy, GoogleStrategy, RtStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, PrismaService, GoogleStrategy, AtStrategy, RtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
