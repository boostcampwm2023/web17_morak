import io, { Socket } from 'socket.io-client';
import { RequestUserRoomDto } from '../interface/user.interface'
import { ChatMessage, StatusType } from '../interface/message.interface';

export type CallBack = (status: StatusType, msg: ChatMessage[]) => void;
class SocketClient {
  private socket: Socket | null = null;
  private static URL: string;

  SocketClient(URL: string) {
    SocketClient.URL = URL;
  }

  connectSocket(): void {
    this.socket = io(SocketClient.URL, { transports: ['websocket'] });
  }

  disconnectSocket(): void {
    if (this.socket) this.socket.disconnect();
  }

  joinRoom(user: RequestChatUser, room: string, cb: CallBack): void { 
    this.connectSocket();
    if (this.socket && room) {
      this.socket.emit('joinRoom',{ user, room });
    }
  }

  leaveRoom(userRoomDto: RequestUserRoomDto): void {
    if (this.socket && userRoomDto.room) {
      this.socket.emit('leaveRoom', userRoomDto);
    }
    this.disconnectSocket();
  }

  subscribeToChat(cb: CallBack): void {
    if (!this.socket) return;

    this.socket.on('chat', (status: StatusType, msg: ChatMessage) => {
      return cb(status, [msg]);
    });
  }

  sendMessage(chatDto: ChatMessage): void {
    if (this.socket) this.socket.emit('chatMessage', chatDto);
  }

  requestPrevMessage(room: string, cursorDate: Date ,cb: CallBack): void {
    if (this.socket && room) {
      this.socket.emit('requestPrevMessage', room, cursorDate);
      this.socket.on('receivePrevMessage', (status: StatusType, msgs: ChatMessage[]) => {
        cb(status, msgs);
      });
    }
  }
}

export default SocketClient;
