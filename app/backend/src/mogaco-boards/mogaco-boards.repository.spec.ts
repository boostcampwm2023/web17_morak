import { Test, TestingModule } from '@nestjs/testing';
import { MogacoRepository } from './mogaco-boards.repository';
import { PrismaService } from 'prisma/prisma.service';
import { Member } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { MogacoStatus } from './enum/mogaco-status.enum';

describe('MogacoRepository', () => {
  let repository: MogacoRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MogacoRepository,
        {
          provide: PrismaService,
          useValue: {
            mogaco: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              updateMany: jest.fn(),
            },
            groupToUser: {
              findMany: jest.fn().mockResolvedValueOnce([{ groupId: BigInt(1), userId: mockMember.id }]),
            },
            participant: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              delete: jest.fn(),
              count: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    repository = module.get<MogacoRepository>(MogacoRepository);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  const mockMember: Member = {
    id: BigInt(1),
    providerId: '11111122222222',
    email: 'morak@gmail.com',
    nickname: 'morak morak',
    profilePicture: 'morak.jpg',
    socialType: 'google',
    createdAt: new Date('2023-12-01'),
  };

  const mockGroup = {
    id: '1',
    title: '부스트캠프 웹·모바일 8기',
  };

  const forbiddenBigintGroups = {
    id: BigInt(1),
    title: '부스트캠프 웹·모바일 8기',
  };

  const mockParticipants = [
    {
      id: '1',
      providerId: '11111122222222',
      email: 'morak@gmail.com',
      nickname: 'morak morak',
      profilePicture: 'morak.jpg',
    },
    {
      id: '2',
      providerId: '11111122222223',
      email: 'boogak@gmail.com',
      nickname: 'kimboogak',
      profilePicture: 'kimboogak.jpg',
    },
  ];

  const mockResult = [
    {
      id: BigInt(1),
      groupId: BigInt(1),
      memberId: BigInt(1),
      title: 'Mock Mogaco Event',
      contents: 'This is a mock event',
      date: new Date('2023-12-01'),
      maxHumanCount: 10,
      address: 'Mock Address',
      latitude: new Decimal(37.1234),
      longitude: new Decimal(-122.5678),
      status: '모집 중',
      createdAt: new Date('2023-12-01'),
      updatedAt: new Date('2023-12-01'),
      deletedAt: null,
      group: mockGroup,
    },
  ];

  const mockMogaco = {
    id: BigInt(1),
    groupId: BigInt(1),
    memberId: BigInt(1),
    title: 'Mock Mogaco Event',
    contents: 'This is a mock event',
    date: new Date('2023-12-01'),
    maxHumanCount: 10,
    address: 'Mock Address',
    latitude: new Decimal(37.1234),
    longitude: new Decimal(-122.5678),
    status: '모집 중',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-01'),
    deletedAt: null,
    member: mockMember,
    group: forbiddenBigintGroups,
    participants: mockParticipants,
  };

  const mockMogacoNoGroup = {
    id: BigInt(1),
    groupId: BigInt(1),
    memberId: BigInt(1),
    title: 'Mock Mogaco Event',
    contents: 'This is a mock event',
    date: new Date('2023-12-01'),
    maxHumanCount: 10,
    address: 'Mock Address',
    latitude: new Decimal(37.1234),
    longitude: new Decimal(-122.5678),
    status: '모집 중',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-01'),
    deletedAt: null,
    member: mockMember,
  };

  const mockMogacoNoGroupMember = {
    id: BigInt(1),
    groupId: BigInt(1),
    memberId: BigInt(1),
    title: 'Mock Mogaco Event',
    contents: 'This is a mock event',
    date: new Date('2023-12-01'),
    maxHumanCount: 10,
    address: 'Mock Address',
    latitude: new Decimal(37.1234),
    longitude: new Decimal(-122.5678),
    status: '모집 중',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-01'),
    deletedAt: null,
  };

  const mockUpdateMogacoNoGroupMember = {
    id: BigInt(1),
    groupId: BigInt(1),
    memberId: BigInt(1),
    title: 'Updated Mogaco',
    contents: 'Updated contents',
    date: new Date('2023-12-01'),
    maxHumanCount: 8,
    address: 'Updated Address',
    latitude: new Decimal(37.1234),
    longitude: new Decimal(-122.5678),
    status: '모집 마감',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-01'),
    deletedAt: null,
  };

  const mockCreateMogacoDto = {
    groupId: '1',
    title: 'Test Mogaco',
    contents: 'This is a test mogaco',
    date: '2023-12-01',
    latitude: 37.1234,
    longitude: -122.5678,
    maxHumanCount: 5,
    status: '모집 중',
    address: 'Test Address',
  };

  const mockUpdateMogacoDto = {
    groupId: '1',
    title: 'Updated Mogaco',
    contents: 'Updated contents',
    date: '2023-12-31',
    latitude: 37.54321,
    longitude: -122.12345,
    maxHumanCount: 8,
    status: '모집 마감',
    address: 'Updated Address',
  };

  // 실제로 나올 값
  const expectedMogaco = [
    {
      id: '1',
      groupId: '1',
      title: 'Mock Mogaco Event',
      contents: 'This is a mock event',
      date: new Date('2023-12-01'),
      maxHumanCount: 10,
      address: 'Mock Address',
      latitude: 37.1234,
      longitude: -122.5678,
      status: '모집 중',
      createdAt: new Date('2023-12-01'),
      updatedAt: new Date('2023-12-01'),
      deletedAt: null,
      group: mockGroup,
    },
  ];

  const expectedMogacoById = {
    id: '1',
    groupId: '1',
    groupTitle: '부스트캠프 웹·모바일 8기',
    title: 'Mock Mogaco Event',
    contents: 'This is a mock event',
    date: new Date('2023-12-01'),
    maxHumanCount: 10,
    address: 'Mock Address',
    latitude: 37.1234,
    longitude: -122.5678,
    status: '모집 중',
    member: {
      providerId: '11111122222222',
      email: 'morak@gmail.com',
      nickname: 'morak morak',
      profilePicture: 'morak.jpg',
    },
    participants: mockParticipants,
  };

  const expectedCreateMogaco = {
    id: BigInt(1),
    groupId: BigInt(1),
    memberId: BigInt(1),
    title: 'Mock Mogaco Event',
    contents: 'This is a mock event',
    date: new Date('2023-12-01'),
    maxHumanCount: 10,
    address: 'Mock Address',
    latitude: new Decimal(37.1234),
    longitude: new Decimal(-122.5678),
    status: '모집 중',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-01'),
    deletedAt: null,
    member: {
      id: BigInt(1),
      providerId: '11111122222222',
      email: 'morak@gmail.com',
      nickname: 'morak morak',
      profilePicture: 'morak.jpg',
      socialType: 'google',
      createdAt: new Date('2023-12-01'),
    },
  };

  const expectedUpdateMogaco = {
    id: BigInt(1),
    groupId: BigInt(1),
    memberId: BigInt(1),
    title: 'Updated Mogaco',
    contents: 'Updated contents',
    date: new Date('2023-12-01'),
    maxHumanCount: 8,
    address: 'Updated Address',
    latitude: new Decimal(37.1234),
    longitude: new Decimal(-122.5678),
    status: '모집 마감',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-01'),
    deletedAt: null,
  };

  describe('updateCompletedMogacos', () => {
    it('모각코 시간이 지나면 "모집 중"에서 "종료"로 변경해야 함', async () => {
      const currentDate = new Date();
      const mogacosMock = [
        { id: 1, date: new Date(currentDate.getTime() - 1000), status: '모집 중' },
        { id: 2, date: new Date(currentDate.getTime() + 1000), status: '종료' },
      ];

      // findMany 메서드를 Jest의 Mock으로 형변환, Prisma의 Mock이 Jest Mock이 아니기 때문에 타입 캐스팅
      (prismaService.mogaco.findMany as jest.Mock).mockResolvedValue(mogacosMock);

      await repository['updateCompletedMogacos'](mogacosMock);

      expect(prismaService.mogaco.updateMany).toHaveBeenCalledWith({
        where: {
          id: {
            in: [1],
          },
        },
        data: {
          status: MogacoStatus.COMPLETED,
        },
      });
    });
  });

  describe('getMogaco', () => {
    it('가입한 그룹의 모든 모각코 조회해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'findMany').mockResolvedValueOnce(mockResult);
      jest.spyOn(repository, 'updateCompletedMogacos' as any).mockImplementationOnce(() => Promise.resolve());

      const result = await repository.getAllMogaco(mockMember);

      expect(result).toEqual(expectedMogaco);
    });

    it('가입한 그룹 내 특정 기간 모각코 조회해야 함', async () => {
      const date = '2023-12-01';
      jest.spyOn(prismaService.mogaco, 'findMany').mockResolvedValue(mockResult);
      jest.spyOn(repository, 'updateCompletedMogacos' as any).mockImplementationOnce(() => Promise.resolve());

      const result = await repository.getMogacoByDate(date, mockMember);

      expect(result).toEqual(expectedMogaco);
    });

    it('해당 날짜에 모각코가 없으면 NotFoundException 발생', async () => {
      const date = '2023-12-31';
      jest.spyOn(prismaService.mogaco, 'findMany').mockResolvedValue([]);

      try {
        await repository.getMogacoByDate(date, mockMember);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toBe(`No Mogaco events found for the date ${date}`);
      }
    });
  });

  describe('getMogacoById', () => {
    it('특정 id에 해당하는 모각코를 반환해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(repository, 'getParticipants').mockResolvedValueOnce(mockParticipants);

      const result = await repository.getMogacoById(Number(mockMogaco.id), mockMember);
      expect(result).toEqual(expectedMogacoById);
    });

    it('존재하지 않는 모각코를 조회할 경우 NotFoundException 발생', async () => {
      const id = 999;
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(null);

      await expect(repository.getMogacoById(id, mockMember)).rejects.toThrowError(NotFoundException);
    });
  });

  describe('createMogaco', () => {
    it('모각코 게시글을 생성해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'create').mockResolvedValueOnce(mockMogacoNoGroup);
      jest.spyOn(prismaService.participant, 'create').mockResolvedValueOnce({
        postId: mockMogaco.id,
        userId: mockMember.id,
      });

      const result = await repository.createMogaco(mockCreateMogacoDto, mockMember);

      expect(result).toEqual(expectedCreateMogaco);
    });
  });

  describe('deleteMogaco', () => {
    it('모각코 게시글을 삭제해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.mogaco, 'update').mockResolvedValueOnce(mockMogacoNoGroupMember);

      await repository.deleteMogaco(Number(mockMogaco.id), mockMember);

      expect(prismaService.mogaco.findUnique).toHaveBeenCalledWith({
        where: { id: Number(mockMogaco.id) },
      });

      expect(prismaService.mogaco.update).toHaveBeenCalledWith({
        where: { id: Number(mockMogaco.id) },
        data: {
          deletedAt: expect.any(Date),
        },
      });
    });

    it('존재하지 않는 모각코를 삭제할 경우 NotFoundException 발생', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(null);

      await expect(repository.deleteMogaco(999, mockMember)).rejects.toThrowError(NotFoundException);
    });

    it('다른 멤버가 작성한 모각코를 삭제할 경우 ForbiddenException 발생', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);

      // mockMember.id와 다른 멤버의 ID 설정
      const otherMember = { id: BigInt(999), providerId: 'otherProviderId' } as Member;

      await expect(repository.deleteMogaco(1, otherMember)).rejects.toThrowError(ForbiddenException);
    });
  });

  describe('updateMogaco', () => {
    it('모각코 게시글을 수정해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.mogaco, 'update').mockResolvedValueOnce(mockUpdateMogacoNoGroupMember);

      const result = await repository.updateMogaco(Number(mockMogaco.id), mockUpdateMogacoDto, mockMember);

      expect(result).toEqual(expectedUpdateMogaco);
    });

    it('존재하지 않는 모각코인 경우 NotFoundException 발생', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(null);

      await expect(
        repository.updateMogaco(Number(mockMogaco.id), mockUpdateMogacoDto, mockMember),
      ).rejects.toThrowError(NotFoundException);
    });

    it('멤버의 ID와 모각코의 작성자 ID가 다른 경우 ForbiddenException 발생', async () => {
      const mockOtherMember = {
        ...mockMember,
        id: BigInt(2),
      };

      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);

      await expect(
        repository.updateMogaco(Number(mockMogaco.id), mockUpdateMogacoDto, mockOtherMember),
      ).rejects.toThrowError(ForbiddenException);
    });
  });

  describe('joinMogaco', () => {
    it('모각코에 참가해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.participant, 'create').mockResolvedValueOnce({
        postId: mockMogaco.id,
        userId: mockMember.id,
      });
      jest.spyOn(repository, 'getParticipantsCount' as any).mockResolvedValueOnce(mockMogaco.maxHumanCount - 1);

      await repository.joinMogaco(Number(mockMogaco.id), mockMember);

      expect(prismaService.mogaco.findUnique).toHaveBeenCalledWith({
        where: { id: Number(mockMogaco.id), deletedAt: null },
      });

      expect(prismaService.participant.create).toHaveBeenCalledWith({
        data: {
          postId: mockMogaco.id,
          userId: mockMember.id,
        },
      });

      expect(prismaService.mogaco.update).toHaveBeenCalledWith({
        where: { id: mockMogaco.id },
        data: {
          status: MogacoStatus.CLOSED,
        },
      });
    });

    it('모각코가 이미 참가 인원이 가득 찬 경우 ForbiddenException 발생', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.participant, 'findUnique').mockResolvedValueOnce(null);
      jest.spyOn(repository, 'getParticipantsCount' as any).mockResolvedValueOnce(mockMogaco.maxHumanCount);

      await expect(repository.joinMogaco(Number(mockMogaco.id), mockMember)).rejects.toThrowError(ForbiddenException);
    });

    it('모각코에 이미 참가한 경우 ForbiddenException 발생', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.participant, 'findUnique').mockResolvedValueOnce({
        postId: mockMogaco.id,
        userId: mockMember.id,
      });

      await expect(repository.joinMogaco(Number(mockMogaco.id), mockMember)).rejects.toThrowError(ForbiddenException);
    });
  });

  describe('getParticipants', () => {
    it('해당 모각코의 참가자를 조회해야 함', async () => {
      const mockParticipant = {
        postId: mockMogaco.id,
        userId: mockMember.id,
        member: mockMember, // Include member data
      };

      jest.spyOn(prismaService.participant, 'findMany').mockResolvedValue([mockParticipant]);

      const result = await repository.getParticipants(Number(mockMogaco.id));

      const expectedParticipant = {
        id: mockMember.id.toString(),
        providerId: mockMember.providerId,
        email: mockMember.email,
        nickname: mockMember.nickname,
        profilePicture: mockMember.profilePicture,
        socialType: mockMember.socialType,
        createdAt: mockMember.createdAt,
      };

      expect(result).toEqual([expectedParticipant]);
    });
  });

  describe('cancelMogacoJoin', () => {
    it('모각코 참가를 취소해야 함', async () => {
      const mockClosedMogaco = {
        ...mockMogaco,
        status: MogacoStatus.CLOSED,
      };

      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockClosedMogaco);
      jest.spyOn(prismaService.participant, 'findUnique').mockResolvedValueOnce({
        postId: mockClosedMogaco.id,
        userId: mockMember.id,
      });
      jest.spyOn(prismaService.participant, 'delete').mockResolvedValueOnce({
        postId: mockClosedMogaco.id,
        userId: mockMember.id,
      });

      await repository.cancelMogacoJoin(Number(mockClosedMogaco.id), mockMember);

      expect(prismaService.mogaco.update).toHaveBeenCalledWith({
        where: { id: mockClosedMogaco.id },
        data: {
          status: MogacoStatus.RECRUITING,
        },
      });

      expect(prismaService.participant.delete).toHaveBeenCalledWith({
        where: {
          postId_userId: {
            postId: mockClosedMogaco.id,
            userId: mockMember.id,
          },
        },
      });
    });

    it('취소할 모각코가 없는 경우 NotFoundException 발생', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(null);

      await expect(repository.cancelMogacoJoin(1, mockMember)).rejects.toThrowError(NotFoundException);
    });

    it('해당 모각코 참여자에 없는 경우 NotFoundException 발생', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.participant, 'findUnique').mockResolvedValueOnce(null);

      await expect(repository.cancelMogacoJoin(1, mockMember)).rejects.toThrowError(NotFoundException);
    });

    it('취소 권한이 없는 경우 Forbidden 발생', async () => {
      const participantId = 999; // Some other user's ID
      const mockParticipant = { postId: BigInt(1), userId: BigInt(participantId) };

      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.participant, 'findUnique').mockResolvedValueOnce(mockParticipant);

      try {
        await repository.cancelMogacoJoin(1, mockMember);
      } catch (error) {
        expect(error).toBeInstanceOf(ForbiddenException);
      }
    });
  });
});
