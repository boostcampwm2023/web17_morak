import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const JoinUser = createParamDecorator(
  (ctx: ExecutionContext): any => {
    const message = ctx.switchToWs().getData();
    if (!message || !message.user) {
      throw new UnauthorizedException('User is not authenticated');
    }

    return message.user;
  },
);