import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { Request, Response } from 'express';
import { RtGuard } from './guards/rt.guard';
import { LogoutDto } from './dto/user.dto';

@ApiTags('Oauth API')
@ApiSecurity('google')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/google/login')
  @UseGuards(GoogleOauthGuard)
  @ApiOperation({
    summary: 'Google 로그인 요청 API',
    description: 'Google OAuth API에 로그인 요청',
  })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async googleLogin(): Promise<void> {}

  @Get('/google/callback')
  @UseGuards(GoogleOauthGuard)
  @ApiOperation({
    summary: 'Google OAuth 콜백 처리',
    description: '로그인을 진행하여 Access, Refresh Token 발급',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async googleLoginCallback(@Req() req, @Res() res): Promise<void> {
    try {
      const { user } = req;
      const { providerId, socialType, name, email, profilePicture } = user;

      const tokens = await this.authService.handleLogin({
        provider_id: providerId,
        email,
        nickname: name,
        social_type: socialType,
        profilePicture,
      });

      res.cookie('access_token', tokens.access_token, { httpOnly: true, maxAge: process.env.MAX_AGE_ACCESS_TOKEN });
      res.cookie('refresh_token', tokens.refresh_token, { httpOnly: true, maxAge: process.env.MAX_AGE_REFRESH_TOKEN });

      res.redirect(process.env.DOMAIN);
    } catch (error) {
      throw new UnauthorizedException('Failed to handle Google login callback');
    }
  }

  @Post('/refresh')
  @UseGuards(RtGuard)
  @ApiOperation({
    summary: 'Refresh Token을 이용하여 Access Token 재갱신',
    description: 'cookie에 있는 Refresh Token을 이용해서 새로운 Access Token을 반환',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<void> {
    try {
      const cookieRefreshToken = req.cookies.refresh_token;
      const newAccessToken = await this.authService.refresh(cookieRefreshToken);

      res.setHeader('Authorization', 'Bearer ' + newAccessToken);
      res.cookie('access_token', newAccessToken, { httpOnly: true, maxAge: Number(process.env.MAX_AGE_ACCESS_TOKEN) });

      res.json({ newAccessToken });
    } catch (err) {
      res.clearCookie('access_token', { httpOnly: true });
      res.clearCookie('refresh_token', { httpOnly: true });
      throw new UnauthorizedException('Failed to refresh token');
    }
  }

  @Post('/logout')
  @ApiOperation({
    summary: '로그아웃',
    description: '로그아웃 작업을 수행하여 cookie에 있는 Access, Refresh Token 제거',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBody({
    type: LogoutDto,
  })
  async logout(
    @Body(ValidationPipe) body: { providerId: string },
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    try {
      const { providerId } = body;
      await this.authService.logout(providerId);

      res.clearCookie('access_token', { httpOnly: true });
      res.clearCookie('refresh_token', { httpOnly: true });
    } catch (error) {
      console.error('Logout error:', error);
      throw new UnauthorizedException('Failed to logout');
    }
  }

  @Get('/me')
  @ApiOperation({
    summary: '사용자 정보 조회',
    description: '현재 로그인한 사용자의 정보 조회',
  })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getUserData(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const encryptedToken = req.cookies.access_token;
      const userData = await this.authService.getUserData(encryptedToken);

      res.json(userData);
    } catch (error) {
      throw new UnauthorizedException('Failed to get user profile');
    }
  }
}
