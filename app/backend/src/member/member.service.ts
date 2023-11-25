import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MemberInformationDto } from './dto/member.dto';
import { getSecret } from 'vault';
import { RequestViewMyInfoDto } from '@morak/apitype/DTO/request/member';

@Injectable()
export class MemberService {
  constructor(private jwtService: JwtService) {}

  async getUserData(encryptedToken: RequestViewMyInfoDto): Promise<MemberInformationDto> {
    const decodedAccessToken = this.jwtService.verify(encryptedToken.accesToken, { secret: getSecret(`JWT_ACCESS_SECRET`) });
    const { providerId, email, nickname, profilePicture } = decodedAccessToken;

    return { providerId, email, nickname, profilePicture };
  }
}
