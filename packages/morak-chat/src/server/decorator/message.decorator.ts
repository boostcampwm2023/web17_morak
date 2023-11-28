import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Socket } from 'socket.io';

export const ChatMessage = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const message = ctx.switchToWs().getData();
    return message;
  },
);

export const BroadcastMessage = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const client = ctx.switchToWs().getClient<Socket>();
    const message = ctx.switchToWs().getData();
    client.to(message.room).emit('chat_message', message); // 방에 메시지 브로드캐스트
  },
);
