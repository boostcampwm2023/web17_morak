import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { Payload, Tokens } from './interface';
import { getSecret } from 'vault';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private authRepository: AuthRepository,
  ) {}

  async handleLogin(userDto: CreateUserDto): Promise<Tokens> {
    const { provider_id } = userDto;
    const existingUser = await this.authRepository.findUserByIdentifier(provider_id);

    if (!existingUser) {
      await this.signUp(userDto);
    }

    return this.signIn(userDto);
  }

  generateJwt(payload: Payload): Tokens {
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: getSecret('MAX_AGE_ACCESS_TOKEN'),
      secret: getSecret('MAX_AGE_ACCESS_TOKEN'),
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: getSecret('MAX_AGE_REFRESH_TOKEN'),
      secret: getSecret('JWT_REFRESH_SECRET'),
    });

    return { access_token: accessToken, refresh_token: refreshToken };
  }

  async signIn(userDto: CreateUserDto): Promise<Tokens | null> {
    const token = this.generateJwt({
      providerId: userDto.provider_id,
      socialType: userDto.social_type,
      email: userDto.email,
      profilePicture: userDto.profilePicture,
      nickname: userDto.nickname,
    });

    await this.authRepository.addRefreshToken(userDto.provider_id, token.refresh_token);
    return token;
  }

  async signUp(userDto: CreateUserDto): Promise<void> {
    await this.authRepository.saveUser(userDto);
  }

  async refresh(refreshToken: string): Promise<string> {
    try {
      const decodedRefreshToken = this.jwtService.verify(refreshToken, { secret: getSecret('JWT_REFRESH_SECRET') });
      const { provider_id, social_type } = decodedRefreshToken;

      const token = this.generateJwt({ providerId: provider_id, socialType: social_type });

      return token.access_token;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(provider_id: string) {
    await this.authRepository.removeRefreshToken(provider_id);
  }
}
