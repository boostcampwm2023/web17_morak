import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Socket } from 'socket.io';

export const JoinRoom = createParamDecorator(
  (room: string, ctx: ExecutionContext) => {
    const client = ctx.switchToWs().getClient<Socket>();
    client.join(room);
  },
);

export const LeaveRoom = createParamDecorator(
  (room: string, ctx: ExecutionContext) => {
    const client = ctx.switchToWs().getClient<Socket>();
    client.leave(room);
  },
);
