import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GoogleOauthGuard } from './guards/google-oauth.guard';

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
    const { providerId, firstName, lastName, email } = user;
    const nickname = lastName + firstName;
    const provider_id = providerId;
    const social_type = 'google';

    const createdUser = await this.authService.createGoogleUser({ provider_id, email, nickname, social_type });

    return res.send(createdUser);
  }
}
