import { Test, TestingModule } from '@nestjs/testing';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { CreateGroupsDto } from './dto/create-groups.dto';
import { Member } from '@prisma/client';

describe('GroupsController', () => {
  let controller: GroupsController;
  let service: GroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupsController],
      providers: [
        GroupsService,
        {
          provide: GroupsService,
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

    controller = module.get<GroupsController>(GroupsController);
    service = module.get<GroupsService>(GroupsService);
  });

  describe('getAllGroups', () => {
    it('모든 그룹을 반환해야 함', async () => {
      const expectedGroups = [
        { id: BigInt(1), title: '부스트캠프 웹·모바일 8기', membersCount: 212 },
        { id: BigInt(2), title: '부스트캠프 웹·모바일 9기', membersCount: 187 },
      ];
      jest.spyOn(service, 'getAllGroups').mockResolvedValue(expectedGroups);

      const result = await controller.getAllGroups();

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
      jest.spyOn(service, 'getAllMembersOfGroup').mockResolvedValue(expectedMembers);

      const result = await controller.getAllMembersOfGroup(groupId);

      expect(result).toEqual(expectedMembers);
    });
  });

  describe('createGroups', () => {
    it('새로운 그룹을 생성해야 함', async () => {
      const createGroupsDto: CreateGroupsDto = { title: 'New Group' };
      const expectedGroup = { id: BigInt(3), title: 'New Group' };
      jest.spyOn(service, 'createGroups').mockResolvedValue(expectedGroup);

      const result = await controller.createGroups(createGroupsDto);

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

      const joinGroupSpy = jest.spyOn(service, 'joinGroup');

      await controller.joinGroup(groupId, member);

      expect(joinGroupSpy).toHaveBeenCalledWith(groupId, member);
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

      const leaveGroupSpy = jest.spyOn(service, 'leaveGroup');

      await controller.leaveGroup(groupId, member);

      expect(leaveGroupSpy).toHaveBeenCalledWith(groupId, member);
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
      jest.spyOn(service, 'getMyGroups').mockResolvedValue(expectedGroups);

      const result = await controller.getMyGroups(member);

      expect(result).toEqual(expectedGroups);
    });
  });
});
