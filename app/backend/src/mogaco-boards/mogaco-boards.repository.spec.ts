import { Test, TestingModule } from '@nestjs/testing';
import { MogacoRepository } from './mogaco-boards.repository';
import { PrismaService } from 'prisma/prisma.service';
import { Member } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

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

  describe('getMogaco', () => {
    it('가입한 그룹의 모든 모각코 조회해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'findMany').mockResolvedValueOnce(mockResult);

      const result = await repository.getAllMogaco(mockMember);

      expect(result).toEqual(expectedMogaco);
    });

    it('가입한 그룹 내 특정 기간 모각코 조회해야 함', async () => {
      const date = '2023-12-01';
      jest.spyOn(prismaService.mogaco, 'findMany').mockResolvedValue(mockResult);

      const result = await repository.getMogacoByDate(date, mockMember);

      expect(result).toEqual(expectedMogaco);
    });
  });

  describe('getMogacoById', () => {
    it('특정 id에 해당하는 모각코를 반환해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(repository, 'getParticipants').mockResolvedValueOnce(mockParticipants);

      const result = await repository.getMogacoById(Number(mockMogaco.id), mockMember);

      expect(result).toEqual(expectedMogacoById);
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

      await repository.deleteMogaco(1, mockMember);

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
  });

  describe('updateMogaco', () => {
    it('모각코 게시글을 수정해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.mogaco, 'update').mockResolvedValueOnce(mockUpdateMogacoNoGroupMember);

      const result = await repository.updateMogaco(Number(mockMogaco.id), mockUpdateMogacoDto, mockMember);

      expect(result).toEqual(expectedUpdateMogaco);
    });
  });

  describe('joinMogaco', () => {
    it('모각코에 참가해야 함', async () => {
      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.participant, 'create').mockResolvedValueOnce({
        postId: mockMogaco.id,
        userId: mockMember.id,
      });

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
      const mockParticipant = {
        postId: mockMogaco.id,
        userId: mockMember.id,
      };

      jest.spyOn(prismaService.mogaco, 'findUnique').mockResolvedValueOnce(mockMogaco);
      jest.spyOn(prismaService.participant, 'findMany').mockResolvedValueOnce([mockParticipant]);
      jest.spyOn(prismaService.participant, 'findUnique').mockResolvedValueOnce({
        postId: mockMogaco.id,
        userId: mockMember.id,
      });
      jest.spyOn(prismaService.participant, 'delete').mockResolvedValueOnce({
        postId: mockMogaco.id,
        userId: mockMember.id,
      });

      await repository.cancelMogacoJoin(Number(mockMogaco.id), mockMember);

      expect(prismaService.participant.delete).toHaveBeenCalledWith({
        where: {
          postId_userId: {
            postId: mockMogaco.id,
            userId: mockMember.id,
          },
        },
      });
    });
  });
});
