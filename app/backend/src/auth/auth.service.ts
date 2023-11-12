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

  async createOrLoginGoogleUser(userDto: CreateUserDto): Promise<string> {
    const { provider_id } = userDto;
    const existingUser = await this.authRepository.findUserByIdentifier(provider_id);

    if (existingUser) {
      return this.signIn(provider_id);
    } else {
      return this.signUp(userDto);
    }
  }

  generateJwt(payload: object) {
    return this.jwtService.sign(payload);
  }

  async signIn(provider_id: string): Promise<string | null> {
    const token = this.generateJwt({
      sub: provider_id,
    });
    return token;
  }

  async signUp(userDto: CreateUserDto): Promise<string> {
    const newUser = await this.authRepository.saveUser(userDto);
    const token = this.generateJwt({
      sub: newUser.provider_id,
    });
    return token;
  }
}
