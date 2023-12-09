import { Test, TestingModule } from '@nestjs/testing';
import { GroupsService } from './groups.service';
import { GroupsRepository } from './groups.repository';
import { Member } from '@prisma/client';
import { CreateGroupsDto } from './dto/create-groups.dto';

describe('GroupsService', () => {
  let service: GroupsService;
  let repository: GroupsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupsService,
        {
          provide: GroupsRepository,
          useValue: {
            getAllGroups: jest.fn(),
            getAllMembersOfGroup: jest.fn(),
            createGroups: jest.fn(),
            joinGroup: jest.fn(),
            leaveGroup: jest.fn(),
            getMyGroups: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<GroupsService>(GroupsService);
    repository = module.get<GroupsRepository>(GroupsRepository);
  });

  describe('getAllGroups', () => {
    it('모든 그룹을 반환해야 함', async () => {
      const expectedGroups = [
        { id: BigInt(1), title: '부스트캠프 웹·모바일 8기', membersCount: 212 },
        { id: BigInt(2), title: '부스트캠프 웹·모바일 9기', membersCount: 187 },
      ];
      jest.spyOn(repository, 'getAllGroups').mockResolvedValue(expectedGroups);

      const result = await service.getAllGroups();

      expect(result).toEqual(expectedGroups);
    });
  });

  describe('getAllMembersOfGroup', () => {
    it('그룹 내의 모든 멤버를 반환해야 함', async () => {
      const groupId = 1;
      const expectedMembers = [
        {
          providerId: '11111122222222',
          email: 'morak@gmail.com',
          nickname: 'morak morak',
          profilePicture: 'morak.jpg',
        },
        {
          providerId: '111111333333',
          email: 'boostcamp@gmail.com',
          nickname: 'boostcamp',
          profilePicture: 'boostcamp.jpg',
        },
      ];
      jest.spyOn(repository, 'getAllMembersOfGroup').mockResolvedValue(expectedMembers);

      const result = await service.getAllMembersOfGroup(groupId);

      expect(result).toEqual(expectedMembers);
    });
  });

  describe('createGroups', () => {
    it('새로운 그룹을 생성해야 함', async () => {
      const createGroupsDto: CreateGroupsDto = { title: 'New Group' };
      const expectedGroup = { id: BigInt(3), title: 'New Group' };
      jest.spyOn(repository, 'createGroups').mockResolvedValue(expectedGroup);

      const result = await service.createGroups(createGroupsDto);

      expect(result).toEqual(expectedGroup);
    });
  });

  describe('joinGroup', () => {
    it('그룹에 참여해야 함', async () => {
      const groupId = 1;
      const member: Member = {
        id: BigInt(123),
        providerId: '11111122222222',
        email: 'morak@gmail.com',
        nickname: 'morak morak',
        profilePicture: 'morak morak.jpg',
        socialType: 'google',
        createdAt: new Date(),
      };

      await service.joinGroup(groupId, member);

      expect(repository.joinGroup).toHaveBeenCalledWith(groupId, member);
    });
  });

  describe('leaveGroup', () => {
    it('그룹 탈퇴를 해야 함', async () => {
      const groupId = 1;
      const member: Member = {
        id: BigInt(123),
        providerId: '11111122222222',
        email: 'morak@gmail.com',
        nickname: 'morak morak',
        profilePicture: 'morak morak.jpg',
        socialType: 'google',
        createdAt: new Date(),
      };

      await service.leaveGroup(groupId, member);

      expect(repository.leaveGroup).toHaveBeenCalledWith(groupId, member);
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
      const expectedGroups = [{ id: BigInt(1), title: '부스트캠프 웹·모바일 8기' }];
      jest.spyOn(repository, 'getMyGroups').mockResolvedValue(expectedGroups);

      const result = await service.getMyGroups(member);

      expect(result).toEqual(expectedGroups);
    });
  });
});
