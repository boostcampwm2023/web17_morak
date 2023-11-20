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
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { Request, Response } from 'express';
import { RtGuard } from './guards/rt.guard';
import { LogoutDto } from './dto/user.dto';
import { getSecret } from 'vault';

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
  @ApiCreatedResponse({
    status: 201,
    description: 'Google login callback successful',
    headers: {
      'Set-Cookie': {
        description: 'Access and refresh tokens in cookies',
        schema: {
          type: 'string',
        },
      },
      Authorization: {
        description: 'Bearer token for authorization',
        schema: {
          type: 'string',
        },
      },
    },
  })
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

      res.setHeader('Authorization', 'Bearer ' + [tokens.access_token, tokens.refresh_token]);

      res.cookie('access_token', tokens.access_token, { httpOnly: false, maxAge: getSecret('MAX_AGE_ACCESS_TOKEN') });
      res.cookie('refresh_token', tokens.refresh_token, {
        httpOnly: false,
        maxAge: getSecret('MAX_AGE_REFRESH_TOKEN'),
      });

      res.redirect(getSecret(`AUTH_REDIRECT_URL`));
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
  @ApiCreatedResponse({
    status: 201,
    description: 'AccessToken Reissue successful',
    headers: {
      'Set-Cookie': {
        description: 'new AccessToken in cookies',
        schema: {
          type: 'string',
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<void> {
    try {
      const cookieRefreshToken = req.cookies.refresh_token;
      const newAccessToken = await this.authService.refresh(cookieRefreshToken);

      res.setHeader('Authorization', 'Bearer ' + newAccessToken);
      res.cookie('access_token', newAccessToken, {
        httpOnly: false,
        maxAge: Number(getSecret('MAX_AGE_ACCESS_TOKEN')),
      });

      res.json({ newAccessToken });
    } catch (err) {
      res.clearCookie('access_token', { httpOnly: false });
      res.clearCookie('refresh_token', { httpOnly: false });
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

      res.clearCookie('access_token', { httpOnly: false });
      res.clearCookie('refresh_token', { httpOnly: false });
    } catch (error) {
      console.error('Logout error:', error);
      throw new UnauthorizedException('Failed to logout');
    }
  }
}
