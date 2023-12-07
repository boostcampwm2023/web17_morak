import { Injectable } from '@nestjs/common';
import { User } from '@morak/chat/src/interface/user.interface';
import { ChatMessage } from '@morak/chat/src/interface/message.interface';
import { ChatRepository } from './chat.repository';
import { ChatMessageDto } from './dto/chat.dto';

@Injectable()
export class ChatService {
  constructor(private chatRepository: ChatRepository) {}

  writeMessageDB(message: ChatMessageDto) {
    this.chatRepository.saveChatMessage(message);
  }

  loadMessageDB(room: string, cursorDate: Date): Promise<ChatMessageDto[]> {
    return this.chatRepository.getChatMessages(room, cursorDate);
  }

  async isUserInPost(room: string, user: string) {
    if (!Number.isNaN(room) && !Number.isNaN(user)) {
      const postId = parseInt(room, 10);
      const userId = parseInt(user, 10);

      return await this.chatRepository.isUserInPost(postId, userId);
    }
  }
}

export default ChatService;
