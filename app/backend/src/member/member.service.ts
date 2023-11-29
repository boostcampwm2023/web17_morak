import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MemberInformationDto } from './dto/member.dto';
import { getSecret } from 'vault';

@Injectable()
export class MemberService {
  constructor(private jwtService: JwtService) {}

  async getUserData(encryptedToken: string): Promise<MemberInformationDto> {
    const decodedAccessToken = this.jwtService.verify(encryptedToken, {
      secret: getSecret(`JWT_ACCESS_SECRET`),
    });
    const { providerId, email, nickname, profilePicture } = decodedAccessToken;

    return { providerId, email, nickname, profilePicture };
  }
}
