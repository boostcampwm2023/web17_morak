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

  async isUserInGroup(room: string, user: string) {
    if (!Number.isNaN(room) && !Number.isNaN(user)) {
      const groupId = parseInt(room, 10);
      const userId = parseInt(user, 10);

      return await this.chatRepository.isUserInGroup(groupId, userId);
    }
  }
}

export default ChatService;
