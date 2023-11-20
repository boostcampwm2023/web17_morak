import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserData } from './interface/user.interface';

@Injectable()
export class MemberService {
  constructor(private jwtService: JwtService) {}

  async getUserData(encryptedToken: string): Promise<UserData> {
    const decodedAccessToken = this.jwtService.verify(encryptedToken, { secret: process.env.JWT_ACCESS_SECRET });
    const { providerId, email, nickname, profilePicture } = decodedAccessToken;

    return { providerId, email, nickname, profilePicture };
  }
}
