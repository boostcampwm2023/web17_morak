import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Payload } from '../interface';
import { getSecret } from '@morak/vault';
import { Member } from '@prisma/client';
import { AuthRepository } from '../auth.repository';

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authRepository: AuthRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: getSecret('JWT_ACCESS_SECRET'),
    });
  }

  async validate(payload: Payload) {
    const { providerId } = payload;
    const member: Member = await this.authRepository.findUserByIdentifier(providerId);

    if (!member) {
      throw new UnauthorizedException();
    }

    return member;
  }
}
