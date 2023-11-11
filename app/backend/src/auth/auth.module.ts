import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/google.strategy';
import { AuthRepository } from './auth.repository';
import { PrismaService } from '../utils/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy, AuthService, AuthRepository, PrismaService],
})
export class AuthModule {}
