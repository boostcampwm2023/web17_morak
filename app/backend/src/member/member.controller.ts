import { Request, Response } from 'express';
import { Controller, Get, Req, Res, UnauthorizedException } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MemberService } from './member.service';
import { MemberInformationDto } from './dto/member.dto';

@ApiTags('Member Infomation API')
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('/me')
  @ApiCookieAuth()
  @ApiOperation({
    summary: '사용자 정보 조회',
    description:
      '현재 로그인한 사용자의 정보를 조회합니다. 해당 사용자 브라우저의 쿠키에 저장되어있는 액세스 토큰을 사용합니다.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: MemberInformationDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getUserData(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const encryptedToken = req.cookies.access_token;
      const userData = await this.memberService.getUserData(encryptedToken);

      res.json(userData);
    } catch (error) {
      throw new UnauthorizedException('Failed to get user profile');
    }
  }
}
