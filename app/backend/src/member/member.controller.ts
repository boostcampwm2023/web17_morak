import { Controller, Get, Req, Res, UnauthorizedException } from '@nestjs/common';
import { MemberService } from './member.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { MemberDto } from './dto/member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('/me')
  @ApiOperation({
    summary: '사용자 정보 조회',
    description: '현재 로그인한 사용자의 정보 조회',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: MemberDto,
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
