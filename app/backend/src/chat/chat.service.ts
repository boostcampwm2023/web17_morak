import { Injectable } from '@nestjs/common';
import { User } from '@morak/chat/src/interface/user.interface';
import { ChatMessage } from '@morak/chat/src/interface/message.interface';

@Injectable()
export class ChatService {
  // temporary-chat-user 231129 ccxz84 | chat 임시 세션 유저 기록 redis로 이관할지 고민
  private rooms = new Map<string, Set<string>>();

  joinRoom(user: User, room: string) {
    if (!this.rooms.has(room)) {
      this.rooms.set(room, new Set());
    }
    this.rooms.get(room).add(user);
    console.log(this.rooms);
  }

  leaveRoom(user: User, room: string) {
    console.log(room, user, this.rooms.has(room), this.rooms.get(room).has(user));
    if (this.rooms.has(room) && this.rooms.get(room).has(user)) {
      this.rooms.get(room).delete(user);
      console.log(this.rooms);
    }
  }

  isUserInRoom(user: User, room: string): boolean {
    if (!this.rooms.has(room)) {
      return false;
    }
    return this.rooms.get(room).has(user);
  }
  // temporary-chat-user

  // temporary-chat-message 231129 ccxz84 | chat 임시 기록 구현
  private chatMessages: ChatMessage[] = [];

  writeMessage(message: ChatMessage) {
    this.chatMessages.push(message);
  }

  loadPrevMessage(room: string): ChatMessage[] {
    const result = this.chatMessages.filter(message => message.room === room);

    return result;
  }
  // temporary-chat-user

  // TODO) 231128 ccxz84 | chat 채팅 저장 로그 등 필요.
}

export default ChatService;
