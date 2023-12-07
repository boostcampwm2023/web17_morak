import { Test, TestingModule } from '@nestjs/testing';
import { MogacoController } from './mogaco-boards.controller';
import { MogacoService } from './mogaco-boards.service';
import { Member } from '@prisma/client';
import {
  RequestCreateMogacoDto,
  ResponseGroupsDto,
  ResponseMogacoDto,
  ResponseMogacoWithMemberDto,
  ResponseParticipant,
} from '@morak/apitype';

describe('MogacoController', () => {
  let controller: MogacoController;
  let service: MogacoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MogacoController],
      providers: [
        MogacoService,
        {
          provide: MogacoService,
          useValue: {
            getAllMogaco: jest.fn(),
            getMogacoByDate: jest.fn(),
            getMogacoById: jest.fn(),
            createMogaco: jest.fn(),
            deleteMogaco: jest.fn(),
            updateMogaco: jest.fn(),
            joinMogaco: jest.fn(),
            getParticipants: jest.fn(),
            cancelMogacoJoin: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<MogacoController>(MogacoController);
    service = module.get<MogacoService>(MogacoService);
  });

  const mockMember: Member = {
    id: BigInt(1),
    providerId: '11111122222222',
    email: 'morak@gmail.com',
    nickname: 'morak morak',
    profilePicture: 'morak.jpg',
    socialType: 'google',
    createdAt: new Date(),
  };

  const mockGroup: ResponseGroupsDto = {
    id: '1',
    title: '부스트캠프 웹·모바일 8기',
  };

  const mockParticipants: ResponseParticipant[] = [
    {
      id: '1',
      providerId: '11111122222222',
      email: 'morak@gmail.com',
      nickname: 'morak morak',
      profilePicture: 'morak.jpg',
    },
  ];

  const mockResult: ResponseMogacoDto[] = [
    {
      id: '1',
      groupId: '1',
      title: 'Mogaco 1',
      contents: 'Example contents',
      date: new Date(),
      maxHumanCount: 5,
      address: 'Example Address',
      latitude: 37.12345,
      longitude: 122.54321,
      status: '모집 중',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      group: mockGroup,
    },
  ];

  const createUpdateMockResult: ResponseMogacoWithMemberDto = {
    id: '1',
    groupId: '1',
    groupTitle: '부스트캠프 웹·모바일 8기',
    title: 'Mogaco 1',
    contents: 'Example contents',
    date: new Date(),
    maxHumanCount: 5,
    address: 'Example Address',
    latitude: 37.12345,
    longitude: -122.54321,
    status: '모집 중',
    member: mockMember,
    participants: mockParticipants,
  };

  const mockMogacoById: ResponseMogacoWithMemberDto = {
    id: '1',
    groupId: '1',
    groupTitle: '부스트캠프 웹·모바일 8기',
    title: 'Mogaco 1',
    contents: 'Example contents',
    date: new Date(),
    maxHumanCount: 5,
    address: 'Example Address',
    latitude: 37.12345,
    longitude: -122.54321,
    status: '모집 중',
    member: mockMember,
    participants: mockParticipants,
  };

  const createMogacoDto: RequestCreateMogacoDto = {
    groupId: '1',
    title: 'New Mogaco',
    contents: 'New Mogaco contents',
    date: '2023-12-31',
    maxHumanCount: 10,
    address: 'New Address',
    latitude: 37.54321,
    longitude: -122.12345,
    status: '모집 중',
  };

  const updateMogacoDto: RequestCreateMogacoDto = {
    groupId: '1',
    title: 'Updated Mogaco',
    contents: 'Updated contents',
    date: '2023-12-31',
    status: '모집 마감',
    maxHumanCount: 8,
    address: 'Updated Address',
    latitude: 37.54321,
    longitude: -122.12345,
  };

  describe('getMogaco', () => {
    it('가입한 그룹의 모든 모각코 조회해야 함', async () => {
      jest.spyOn(service, 'getAllMogaco').mockResolvedValue(mockResult);

      const result = await controller.getMogaco(mockMember);

      expect(result).toBe(mockResult);
      expect(service.getAllMogaco).toHaveBeenCalledWith(mockMember);
    });

    it('가입한 그룹 내 특정 기간 모각코 조회해야 함', async () => {
      const date = '2023-12-01';
      jest.spyOn(service, 'getMogacoByDate').mockResolvedValue(mockResult);

      const result = await controller.getMogaco(mockMember, date);

      expect(result).toBe(mockResult);
      expect(service.getMogacoByDate).toHaveBeenCalledWith(date, mockMember);
    });
  });

  describe('getMogacoById', () => {
    it('특정 모각코를 조회해야 함', async () => {
      jest.spyOn(service, 'getMogacoById').mockResolvedValue(mockMogacoById);

      const result = await controller.getMogacoById(1, mockMember);

      expect(result).toBe(mockMogacoById);
      expect(service.getMogacoById).toHaveBeenCalledWith(1, mockMember);
    });
  });

  describe('createMogaco', () => {
    it('모각코를 새로 개설해야 함', async () => {
      jest.spyOn(service, 'createMogaco').mockResolvedValue(createUpdateMockResult[0]);

      const result = await controller.createMogaco(createMogacoDto, mockMember);

      expect(result).toBe(createUpdateMockResult[0]);
      expect(service.createMogaco).toHaveBeenCalledWith(createMogacoDto, mockMember);
    });
  });

  describe('deleteMogaco', () => {
    it('모각코를 삭제해야 함', async () => {
      jest.spyOn(service, 'deleteMogaco').mockResolvedValue();

      await controller.deleteMogaco(1, mockMember);

      expect(service.deleteMogaco).toHaveBeenCalledWith(1, mockMember);
    });
  });

  describe('updateMogaco', () => {
    it('모각코를 수정해야 함', async () => {
      jest.spyOn(service, 'updateMogaco').mockResolvedValue(createUpdateMockResult[0]);

      const result = await controller.updateMogaco(1, updateMogacoDto, mockMember);

      expect(result).toBe(createUpdateMockResult[0]);
      expect(service.updateMogaco).toHaveBeenCalledWith(1, updateMogacoDto, mockMember);
    });
  });

  describe('joinMogaco', () => {
    it('모각코에 참여해야 함', async () => {
      jest.spyOn(service, 'joinMogaco').mockResolvedValue();

      await controller.joinMogaco(1, mockMember);

      expect(service.joinMogaco).toHaveBeenCalledWith(1, mockMember);
    });
  });

  describe('getParticipants', () => {
    it('해당 모각코의 참가자를 조회해야 함', async () => {
      jest.spyOn(service, 'getParticipants').mockResolvedValue(mockParticipants);

      const result = await controller.getParticipants(1);

      expect(result).toBe(mockParticipants);
      expect(service.getParticipants).toHaveBeenCalledWith(1);
    });
  });

  describe('cancelMogacoJoin', () => {
    it('모각코 참가를 취소해야 함', async () => {
      jest.spyOn(service, 'cancelMogacoJoin').mockResolvedValue();

      await controller.cancelMogacoJoin(1, mockMember);

      expect(service.cancelMogacoJoin).toHaveBeenCalledWith(1, mockMember);
    });
  });
});
