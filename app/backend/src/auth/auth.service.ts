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
    const { providerId } = userDto;
    const existingUser = await this.authRepository.findUserByIdentifier(providerId);

    if (!existingUser) {
      await this.signUp(userDto);
    }

    return this.signIn(userDto);
  }

  generateJwt(payload: Payload): Tokens {
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: getSecret('MAX_AGE_ACCESS_TOKEN'),
      secret: getSecret('JWT_ACCESS_SECRET'),
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: getSecret('MAX_AGE_REFRESH_TOKEN'),
      secret: getSecret('JWT_REFRESH_SECRET'),
    });

    return { access_token: accessToken, refresh_token: refreshToken };
  }

  async signIn(userDto: CreateUserDto): Promise<Tokens | null> {
    const token = this.generateJwt({
      providerId: userDto.providerId,
      socialType: userDto.socialType,
      email: userDto.email,
      profilePicture: userDto.profilePicture,
      nickname: userDto.nickname,
    });

    await this.authRepository.addRefreshToken(userDto.providerId, token.refresh_token);
    return token;
  }

  async signUp(userDto: CreateUserDto): Promise<void> {
    await this.authRepository.saveUser(userDto);
  }

  async refresh(refreshToken: string): Promise<string> {
    try {
      const decodedRefreshToken = this.jwtService.verify(refreshToken, { secret: getSecret('JWT_REFRESH_SECRET') });
      const { providerId, socialType } = decodedRefreshToken;

      const token = this.generateJwt({ providerId: providerId, socialType: socialType });

      return token.access_token;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(providerId: string) {
    await this.authRepository.removeRefreshToken(providerId);
  }
}
