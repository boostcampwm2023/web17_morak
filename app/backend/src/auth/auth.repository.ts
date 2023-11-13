import { Injectable } from '@nestjs/common';
import { PrismaService } from '../utils/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { Member } from '@prisma/client';

@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaService) {}

  async saveUser(userDto: CreateUserDto): Promise<Member> {
    return this.prisma.member.create({
      data: {
        ...userDto,
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
}
