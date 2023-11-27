import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MemberInformationDto } from './dto/member.dto';
import { getSecret } from 'vault';
import { RequestApiDto } from '@morak/apitype/dto/request/api';

@Injectable()
export class MemberService {
  constructor(private jwtService: JwtService) {}

  async getUserData(encryptedToken: RequestApiDto): Promise<MemberInformationDto> {
    const decodedAccessToken = this.jwtService.verify(encryptedToken.accesToken, {
      secret: getSecret(`JWT_ACCESS_SECRET`),
    });
    const { providerId, email, nickname, profilePicture } = decodedAccessToken;

    return { providerId, email, nickname, profilePicture };
  }
}
