import { Test, TestingModule } from '@nestjs/testing';
import { MemberService } from './member.service';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

jest.mock('@nestjs/jwt');

describe('MemberService', () => {
  let memberService: MemberService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MemberService,
        {
          provide: JwtService,
          useValue: {
            verify: jest.fn(),
          },
        },
      ],
    }).compile();

    memberService = module.get<MemberService>(MemberService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('getUserData', () => {
    it('성공 시 사용자 데이터를 반환해야 함', async () => {
      const mockDecodedAccessToken = {
        providerId: '11111122222222',
        email: 'morak@gmail.com',
        nickname: 'morak morak',
        profilePicture: 'morak.jpg',
      };

      jest.spyOn(jwtService, 'verify').mockReturnValue(mockDecodedAccessToken);

      const encryptedToken = 'mockEncryptedToken';
      const userData = await memberService.getUserData(encryptedToken);

      expect(userData).toEqual(mockDecodedAccessToken);
    });

    it('실패 시 UnauthorizedException을 던져야 함', async () => {
      const errorMessage = 'Invalid Token';

      jest.spyOn(jwtService, 'verify').mockImplementation(() => {
        throw new UnauthorizedException(errorMessage);
      });

      const encryptedToken = 'mockEncryptedToken';

      try {
        await memberService.getUserData(encryptedToken);
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
