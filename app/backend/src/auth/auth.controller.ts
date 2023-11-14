import { Controller, Get, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { Request, Response } from 'express';

@ApiTags('GoogleOauth API')
@ApiSecurity('google')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/login')
  @UseGuards(GoogleOauthGuard)
  @ApiOperation({
    summary: 'Google 로그인 요청 API',
    description: 'Google OAuth API에 로그인 요청',
  })
  @ApiBearerAuth()
  async googleLogin(): Promise<void> {}

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async googleLoginCallback(@Req() req, @Res() res): Promise<void> {
    const { user } = req;
    const { providerId, socialType, name, email } = user;
    const provider_id = providerId;
    const social_type = socialType;
    const nickname = name;

    const { accessToken, refreshToken } = await this.authService.handleLogin({
      provider_id,
      email,
      nickname,
      social_type,
    });

    const maxAgeAccessToken = 2 * 60 * 60 * 1000;
    const maxAgeRefreshToken = 7 * 24 * 60 * 60 * 1000;
    res.cookie('access_token', accessToken, { httpOnly: true, maxAge: maxAgeAccessToken });
    res.cookie('refresh_token', refreshToken, { httpOnly: true, maxAge: maxAgeRefreshToken });

    return res.json({
      user,
      accessToken,
      refreshToken,
    });
  }

  @Get('refresh')
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    try {
      const cookieRefreshToken = req['cookies']['refresh_token'];
      const newAccessToken = await this.authService.refresh(cookieRefreshToken);

      const maxAgeAccessToken = 2 * 60 * 60 * 1000;
      res.cookie('access_token', newAccessToken, { httpOnly: true, maxAge: maxAgeAccessToken });

      return res.json({ newAccessToken });
    } catch (err) {
      res.clearCookie('access_token');
      res.clearCookie('refresh_token');
      throw new UnauthorizedException();
    }
  }
}
