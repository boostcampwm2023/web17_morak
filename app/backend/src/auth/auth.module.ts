import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { AuthRepository } from './auth.repository';
import { PrismaService } from '../utils/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [GoogleStrategy, AuthService, AuthRepository, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
