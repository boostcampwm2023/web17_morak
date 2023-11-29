import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ChatMessage = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const message = ctx.switchToWs().getData();
    return message;
  }
);
