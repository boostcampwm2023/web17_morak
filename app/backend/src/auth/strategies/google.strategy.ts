import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, Profile } from 'passport-google-oauth20';
import { getSecret } from '@morak/vault';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: getSecret('GOOGLE_CLIENT_ID'),
      clientSecret: getSecret('GOOGLE_SECRET'),
      callbackURL: getSecret('GOOGLE_CALLBACK_URL'),
      passReqToCallback: true,
      scope: ['profile', 'email'],
    });
  }

  authorizationParams(): { [key: string]: string } {
    return {
      access_type: 'offline',
      prompt: 'select_account',
    };
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, emails, photos, displayName } = profile;
    const user = {
      providerId: id,
      socialType: 'google',
      name: displayName,
      email: emails[0]?.value,
      profilePicture: photos[0]?.value,
      accessToken,
    };

    done(null, user);
  }
}
