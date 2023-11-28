import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Socket } from 'socket.io';

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): any => {
    const client = ctx.switchToWs().getClient<Socket>();
    return client.handshake.query.user;
  },
);
