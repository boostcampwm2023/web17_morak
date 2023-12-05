import { Test, TestingModule } from '@nestjs/testing';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

jest.mock('@nestjs/jwt');

describe('MemberController', () => {
  let memberController: MemberController;
  let memberService: MemberService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberController],
      providers: [
        MemberService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    memberController = module.get<MemberController>(MemberController);
    memberService = module.get<MemberService>(MemberService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('getUserData', () => {
    it('성공 시 사용자 데이터를 반환해야 함', async () => {
      const mockUserData = {
        providerId: '11111122222222',
        email: 'morak@gmail.com',
        nickname: 'morak morak',
        profilePicture: 'morak.jpg',
      };

      // JwtService의 sign 메서드를 모킹하여 가짜 토큰을 반환하도록 설정합니다.
      jest.spyOn(jwtService, 'sign').mockReturnValue('fakeAccessToken');

      jest.spyOn(memberService, 'getUserData').mockResolvedValue(mockUserData);

      // Express의 Request와 Response 객체를 모킹합니다.
      const mockRequest = {
        cookies: { access_token: 'mockAccessToken' },
      } as any;
      const mockResponse = {
        json: jest.fn(),
      } as any;

      // memberController.getUserData를 호출하고 반환값이 예상된 값인지 확인합니다.
      await memberController.getUserData(mockRequest, mockResponse);

      expect(mockResponse.json).toHaveBeenCalledWith(mockUserData);
    });

    it('실패 시 UnauthorizedException을 던져야 함', async () => {
      // memberService.getUserData 메서드가 에러를 던지도록 모킹합니다.
      jest.spyOn(memberService, 'getUserData').mockRejectedValue(new UnauthorizedException('Unauthorized'));

      const mockRequest = {
        cookies: { access_token: 'mockAccessToken' },
      } as any;
      const mockResponse = {
        json: jest.fn(),
      } as any;

      try {
        await memberController.getUserData(mockRequest, mockResponse);
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });
  });
});
