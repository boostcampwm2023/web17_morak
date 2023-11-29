import { Injectable } from '@nestjs/common';
import { RequestChatUser } from '@morak/chat/src/interface/user.interface';

@Injectable()
export class ChatService {
  // temporary-chat-user 231129 ccxz84 | chat 임시 세션 유저 기록 redis로 이관할지 고민
  private rooms = new Map<string, Set<RequestChatUser>>();

  joinRoom(user: RequestChatUser, room: string) {
    if (!this.rooms.has(room)) {
      this.rooms.set(room, new Set());
    }
    this.rooms.get(room).add(user);
  }

  leaveRoom(user: RequestChatUser, room: string) {
    if (this.rooms.has(room) && this.rooms.get(room).has(user)) {
      this.rooms.get(room).delete(user);
    }
  }

  isUserInRoom(user: RequestChatUser, room: string): boolean {
    if (!this.rooms.has(room)) {
      return false;
    }
    return this.rooms.get(room).has(user);
  }
  // temporary-chat-user

  // TODO) 231128 ccxz84 | chat 채팅 저장 로그 등 필요.
}

export default ChatService;
