import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Socket } from 'socket.io';

export const ChatMessage = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const message = ctx.switchToWs().getData();
    return message;
  },
);
