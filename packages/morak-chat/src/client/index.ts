import io, { Socket } from 'socket.io-client';
import { RequestUserRoomDto, RequestChatDto } from '../interface/user.interface'
import { ChatMessage, StatusType } from '../interface/message.interface';

export type CallBack = (status: StatusType, msg: ChatMessage[]) => void;
class SocketClient {
  private socket: Socket | null = null;
  public static URL: string;

  SocketClient(URL: string) {
    SocketClient.URL = URL;
  }

  connectSocket(): void {
    this.socket = io('http://localhost:8081/chat', { transports: ['websocket'] });
  }

  disconnectSocket(): void {
    if(this.socket) this.socket.disconnect();
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

  sendMessage(chatDto: RequestChatDto): void {
    if (this.socket) this.socket.emit('chatMessage', chatDto);
  }
}

export default SocketClient;
