import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Member } from '@prisma/client';
import { CreateUserDto } from './dto/user.dto';
import { getSecret } from '@morak/vault';

@Injectable()
export class AuthRepository {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getUserIdFromToken(providerId: string): Promise<bigint> {
    const user = await this.prisma.member.findUnique({
      where: {
        providerId,
      },
      select: {
        id: true,
      },
    });

    return user.id;
  }
  async saveUser(userDto: CreateUserDto): Promise<Member> {
    const { providerId, socialType, email, nickname, profilePicture } = userDto;

    return this.prisma.member.create({
      data: {
        providerId,
        socialType,
        email,
        nickname,
        profilePicture,
      },
    });
  }

  async updateUser(userDto: CreateUserDto): Promise<Member> {
    const { providerId, nickname, profilePicture } = userDto;

    return this.prisma.member.update({
      where: {
        providerId,
      },
      data: {
        nickname,
        profilePicture,
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
