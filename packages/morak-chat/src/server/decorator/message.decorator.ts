import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const ChatMessage = createParamDecorator((chatMessage: string, ctx: ExecutionContext) => {
  const message = ctx.switchToWs().getData();

  if (!message) {
    throw new BadRequestException('room is undefined');
  }

  return message;
});
