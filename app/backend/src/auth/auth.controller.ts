import { Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { Request, Response } from 'express';
import { RtGuard } from './guards/rt.guard';

@ApiTags('GoogleOauth API')
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
  async googleLogin(): Promise<void> {}

  @Get('/google/callback')
  @UseGuards(GoogleOauthGuard)
  async googleLoginCallback(@Req() req, @Res() res): Promise<void> {
    try {
      const { user } = req;
      const { providerId, socialType, name, email } = user;
      const provider_id = providerId;
      const social_type = socialType;
      const nickname = name;

      const tokens = await this.authService.handleLogin({
        provider_id,
        email,
        nickname,
        social_type,
      });

      res.cookie('access_token', tokens.access_token, { httpOnly: true, maxAge: process.env.MAX_AGE_ACCESS_TOKEN });
      res.cookie('refresh_token', tokens.refresh_token, { httpOnly: true, maxAge: process.env.MAX_AGE_REFRESH_TOKEN });

      return res.json({ user, ...tokens });
    } catch (error) {
      throw new UnauthorizedException('Failed to handle Google login callback');
    }
  }

  @Post('/refresh')
  @UseGuards(RtGuard)
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<void> {
    try {
      const cookieRefreshToken = req['cookies']['refresh_token'];
      const newAccessToken = await this.authService.refresh(cookieRefreshToken);

      const maxAgeAccessToken = 2 * 60 * 60 * 1000;
      res.setHeader('Authorization', 'Bearer ' + newAccessToken);
      res.cookie('access_token', newAccessToken, { httpOnly: true, maxAge: maxAgeAccessToken });

      res.json({ newAccessToken });
    } catch (err) {
      res.clearCookie('access_token', { httpOnly: true });
      res.clearCookie('refresh_token', { httpOnly: true });
      throw new UnauthorizedException('Failed to refresh token');
    }
  }

  @Post('/logout')
  async logout(@Body() body: { providerId: string }, @Res({ passthrough: true }) res: Response): Promise<void> {
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
}
