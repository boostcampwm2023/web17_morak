import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Member } from '@prisma/client';
import { getSecret } from 'vault';

@Injectable()
export class AuthRepository {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async saveUser(userDto: CreateUserDto): Promise<Member> {
    return this.prisma.member.create({
      data: {
        providerId: userDto.providerId,
        socialType: userDto.socialType,
        email: userDto.email,
        nickname: userDto.nickname,
        profilePicture: userDto.profilePicture,
      },
    });
  }

  async updateUser(userDto: CreateUserDto): Promise<Member> {
    const providerId = userDto.providerId;

    return this.prisma.member.update({
      where: {
        providerId,
      },
      data: {
        nickname: userDto.nickname,
        profilePicture: userDto.profilePicture,
      },
    });
  }

  async findUserByIdentifier(providerId: string): Promise<Member | null> {
    return this.prisma.member.findUnique({
      where: {
        providerId,
      },
    });
  }

  async addRefreshToken(providerId: string, refreshToken: string): Promise<void> {
    const REDIS_MAX_AGE_REFRESH_TOKEN: number = Number(getSecret('REDIS_MAX_AGE_REFRESH_TOKEN'));
    await this.cacheManager.set(providerId, refreshToken, { ttl: REDIS_MAX_AGE_REFRESH_TOKEN } as any);
  }

  async removeRefreshToken(providerId: string): Promise<void> {
    await this.cacheManager.del(providerId);
  }

  async getRefreshToken(providerId: string): Promise<string | null> {
    return this.cacheManager.get(providerId);
  }
}
