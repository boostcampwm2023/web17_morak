import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../libs/utils/prisma.service';
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
        provider_id: userDto.provider_id,
        social_type: userDto.social_type,
      },
    });
  }

  async findUserByIdentifier(provider_id: string): Promise<Member | null> {
    return this.prisma.member.findUnique({
      where: {
        provider_id,
      },
    });
  }

  async addRefreshToken(provider_id: string, refreshToken: string): Promise<void> {
    const REDIS_MAX_AGE_REFRESH_TOKEN: number = Number(getSecret('REDIS_MAX_AGE_REFRESH_TOKEN'));
    await this.cacheManager.set(provider_id, refreshToken, { ttl: REDIS_MAX_AGE_REFRESH_TOKEN } as any);
  }

  async removeRefreshToken(provider_id: string): Promise<void> {
    await this.cacheManager.del(provider_id);
  }
}
