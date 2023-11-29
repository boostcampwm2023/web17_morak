import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const AuthUser = createParamDecorator(
  (user: string, ctx: ExecutionContext): any => {
    const message = ctx.switchToWs().getData();
    if (!message || !message.user) {
      throw new UnauthorizedException('User is not authenticated');
    }

    // TODO) 231128 ccxz84 | chat-auth 룸에 참여할 수 있는지 체크 로직 필요

    return message.user;
  },
);