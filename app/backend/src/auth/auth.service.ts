import { ConflictException, Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './dto/user.dto';
import { Member } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async createGoogleUser(userDto: CreateUserDto): Promise<Member> {
    const { provider_id, email, nickname, social_type } = userDto;

    const existingUser = await this.authRepository.findUserByIdentifier(provider_id);
    if (existingUser) {
      throw new ConflictException('User with this identifier already exists');
    }

    return this.authRepository.saveUser({ provider_id, email, nickname, social_type });
  }
}
