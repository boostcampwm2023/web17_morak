import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Socket } from 'socket.io';

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): any => {
    const client = ctx.switchToWs().getClient<Socket>();
    const user = client.handshake.query.user;
    const room = client.handshake.query.room;

    if (!user) {
      throw new UnauthorizedException('User is not authenticated');
    }

    // TODO) 231128 ccxz84 | chat-auth 룸에 참여할 수 있는지 체크 로직 필요

    return user;
  },
);