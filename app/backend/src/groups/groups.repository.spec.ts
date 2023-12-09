import { Test, TestingModule } from '@nestjs/testing';
import { GroupsRepository } from './groups.repository';
import { PrismaService } from 'prisma/prisma.service';
import { CreateGroupsDto } from './dto/create-groups.dto';
import { Member } from '@prisma/client';

describe('GroupsRepository', () => {
  let repository: GroupsRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupsRepository,
        {
          provide: PrismaService,
          useValue: {
            group: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
            },
            groupToUser: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    repository = module.get<GroupsRepository>(GroupsRepository);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('getAllGroups', () => {
    it('모든 그룹을 반환해야 함', async () => {
      const expectedGroups = [
        { id: BigInt(1), title: '부스트캠프 웹·모바일 8기', membersCount: 212 },
        { id: BigInt(2), title: '부스트캠프 웹·모바일 9기', membersCount: 187 },
      ];
      jest.spyOn(prismaService.group, 'findMany').mockResolvedValue(expectedGroups);

      const result = await repository.getAllGroups();

      expect(result).toEqual(expectedGroups);
    });
  });

  describe('getAllMembersOfGroup', () => {
    it('그룹 내의 모든 멤버를 반환해야 함', async () => {
      const groupId = 1;
      const expectedMembers = [
        {
          groupId: BigInt(1),
          userId: BigInt(1),
          user: {
            providerId: '11111122222222',
            email: 'morak@gmail.com',
            nickname: 'morak morak',
            profilePicture: 'morak morak.jpg',
            socialType: 'google',
            createdAt: new Date(),
          },
        },
      ];
      jest.spyOn(prismaService.groupToUser, 'findMany').mockResolvedValue(expectedMembers);

      const result = await repository.getAllMembersOfGroup(groupId);

      expect(result).toEqual(
        expectedMembers.map((groupToUser) => ({
          providerId: groupToUser.user.providerId,
          email: groupToUser.user.email,
          nickname: groupToUser.user.nickname,
          profilePicture: groupToUser.user.profilePicture,
        })),
      );
    });
  });

  describe('createGroups', () => {
    it('새로운 그룹을 생성해야 함', async () => {
      const createGroupsDto: CreateGroupsDto = { title: 'New Group' };
      const expectedGroup = { id: BigInt(3), title: 'New Group' };
      jest.spyOn(prismaService.group, 'create').mockResolvedValue(expectedGroup);

      const result = await repository.createGroups(createGroupsDto);

      expect(result).toEqual(expectedGroup);
    });
  });

  describe('joinGroup', () => {
    it('그룹에 참여해야 함', async () => {
      const groupId = 1;
      const member: Member = {
        id: BigInt(1),
        providerId: '11111122222222',
        email: 'morak@gmail.com',
        nickname: 'morak morak',
        profilePicture: 'morak morak.jpg',
        socialType: 'google',
        createdAt: new Date(),
      };

      jest.spyOn(prismaService.group, 'findUnique').mockResolvedValue({
        id: BigInt(1),
        title: '부스트캠프 웹·모바일 8기',
      });

      jest.spyOn(prismaService.groupToUser, 'create').mockResolvedValue({
        groupId: BigInt(1),
        userId: member.id,
      });

      await repository.joinGroup(groupId, member);

      // 231204 ldhbenecia | 해당 함수가 특정 인자와 함께 호출되었는지 여부를 확인
      expect(prismaService.groupToUser.create).toHaveBeenCalledWith({
        data: {
          groupId: BigInt(1),
          userId: member.id,
        },
      });
    });
  });

  describe('leaveGroup', () => {
    it('그룹 탈퇴를 해야 함', async () => {
      const groupId = 1;
      const member: Member = {
        id: BigInt(1),
        providerId: '11111122222222',
        email: 'morak@gmail.com',
        nickname: 'morak morak',
        profilePicture: 'morak morak.jpg',
        socialType: 'google',
        createdAt: new Date(),
      };

      jest.spyOn(prismaService.group, 'findUnique').mockResolvedValue({
        id: BigInt(1),
        title: '부스트캠프 웹·모바일 8기',
      });

      jest.spyOn(prismaService.groupToUser, 'findUnique').mockResolvedValue({
        groupId: BigInt(1),
        userId: member.id,
      });

      jest.spyOn(prismaService.groupToUser, 'delete').mockResolvedValue({
        groupId: BigInt(1),
        userId: member.id,
      });

      await repository.leaveGroup(groupId, member);

      expect(prismaService.groupToUser.findUnique).toHaveBeenCalledWith({
        where: {
          groupId_userId: {
            groupId: groupId,
            userId: member.id,
          },
        },
      });

      expect(prismaService.groupToUser.delete).toHaveBeenCalledWith({
        where: {
          groupId_userId: {
            groupId: groupId,
            userId: member.id,
          },
        },
      });
    });
  });

  describe('getMyGroups', () => {
    it('본인이 가입한 그룹을 조회해야 함', async () => {
      const member: Member = {
        id: BigInt(123),
        providerId: '11111122222222',
        email: 'morak@gmail.com',
        nickname: 'morak morak',
        profilePicture: 'morak morak.jpg',
        socialType: 'google',
        createdAt: new Date(),
      };
      const expectedGroups = [
        {
          groupId: BigInt(1),
          userId: member.id,
          group: { id: BigInt(1), title: '부스트캠프 웹·모바일 8기' },
        },
      ];
      jest.spyOn(prismaService.groupToUser, 'findMany').mockResolvedValue(expectedGroups);

      const result = await repository.getMyGroups(member);

      expect(result).toEqual(expectedGroups.map((groupToUser) => groupToUser.group));
    });
  });
});
