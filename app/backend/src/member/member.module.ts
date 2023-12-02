import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

import { MemberService } from './member.service';
import { MemberController } from './member.controller';

@Module({
  imports: [AuthModule, JwtModule],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
