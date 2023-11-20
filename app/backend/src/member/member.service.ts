import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MemberDto } from './dto/member.dto';

@Injectable()
export class MemberService {
  constructor(private jwtService: JwtService) {}

  async getUserData(encryptedToken: string): Promise<MemberDto> {
    const decodedAccessToken = this.jwtService.verify(encryptedToken, { secret: process.env.JWT_ACCESS_SECRET });
    const { providerId, email, nickname, profilePicture } = decodedAccessToken;

    return { providerId, email, nickname, profilePicture };
  }
}
