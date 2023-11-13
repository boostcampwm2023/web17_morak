import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private authRepository: AuthRepository,
  ) {}

  async handleLogin(userDto: CreateUserDto): Promise<{ accessToken: string; refreshToken: string }> {
    const { provider_id } = userDto;
    const existingUser = await this.authRepository.findUserByIdentifier(provider_id);

    if (!existingUser) {
      await this.signUp(userDto);
    }

    return this.signIn(userDto);
  }

  generateJwt(payload: object): { accessToken: string; refreshToken: string } {
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '2h',
      secret: process.env.JWT_ACCESS_SECRET,
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
      secret: process.env.JWT_REFRESH_SECRET,
    });

    return { accessToken, refreshToken };
  }

  async signIn(userDto: CreateUserDto): Promise<{ accessToken: string; refreshToken: string } | null> {
    const token = this.generateJwt({
      sub: userDto.provider_id,
      socialType: userDto.social_type,
    });

    return token;
  }

  async signUp(userDto: CreateUserDto): Promise<void> {
    await this.authRepository.saveUser(userDto);
  }
}
