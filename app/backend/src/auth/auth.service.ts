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

  async handleLogin(userDto: CreateUserDto): Promise<string> {
    const { provider_id } = userDto;
    const existingUser = await this.authRepository.findUserByIdentifier(provider_id);

    if (!existingUser) {
      this.signUp(userDto);
    }
    return this.signIn(userDto);
  }

  generateJwt(payload: object) {
    return this.jwtService.sign(payload);
  }

  async signIn(userDto: CreateUserDto): Promise<string | null> {
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
