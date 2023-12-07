import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import ChatService from './chat.service';

@Injectable()
export class ChatGuard implements CanActivate {
  constructor(private chatService: ChatService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const message = context.switchToWs().getData();

    if (!message || !message.room || !message.user) {
      return false;
    }

    const { user, room } = message;

    return await this.chatService.isUserInPost(room, user);
  }
}
