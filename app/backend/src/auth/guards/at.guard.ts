import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { getSecret } from '@morak/vault';

@Injectable()
export class AtGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.cookies) {
      throw new UnauthorizedException('Unauthorized');
    }

    const accessToken = request.cookies.access_token;

    try {
      const decodedToken = this.jwtService.verify(accessToken, {
        secret: getSecret('JWT_ACCESS_SECRET'),
      });

      const { userId, providerId, socialType, email, profilePicture, nickname } = decodedToken;
      const userIdBigInt = BigInt(userId);

      request.user = { id: userIdBigInt, providerId, socialType, email, profilePicture, nickname };

      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid access token');
    }
  }
}
