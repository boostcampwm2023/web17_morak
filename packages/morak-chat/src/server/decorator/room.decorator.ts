import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Socket } from 'socket.io';

export const JoinRoom = createParamDecorator(
  (room: string, ctx: ExecutionContext) => {
    const client = ctx.switchToWs().getClient<Socket>();
    const message = ctx.switchToWs().getData();
    if (!message || !message.room) {
      throw new BadRequestException('room is undefined');
    }
    
    client.join(message.room);
    return message.room;
  },
);

export const LeaveRoom = createParamDecorator(
  (room: string, ctx: ExecutionContext) => {
    const client = ctx.switchToWs().getClient<Socket>();
    const message = ctx.switchToWs().getData();
    if (!message || !message.room) {
      throw new BadRequestException('room is undefined');
    }
    
    client.leave(message.room);
    return message.room;
  },
);
