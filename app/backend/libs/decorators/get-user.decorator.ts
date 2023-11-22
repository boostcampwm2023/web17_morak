import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Member } from '@prisma/client';

export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext): Member => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
