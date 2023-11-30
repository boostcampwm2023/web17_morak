import io, { Socket } from 'socket.io-client';
import { RequestUserRoomDto } from '../interface/user.interface'
import { ChatMessage, StatusType } from '../interface/message.interface';

export type CallBack = (status: StatusType, msg: ChatMessage[]) => void;

class SocketClient {
  private socket: Socket | null = null;
  private static URL: string;

  constructor(URL: string) {
    SocketClient.URL = URL;
  }

  connectSocket(): void {
    this.socket = io(SocketClient.URL, { transports: ['websocket'] });
  }

  disconnectSocket(): void {
    if (this.socket) this.socket.disconnect();
  }

  joinRoom(userRoomDto: RequestUserRoomDto, cb: CallBack): void {
    try {
      this.connectSocket();
      if (this.socket) {
        this.socket.emit('joinRoom', userRoomDto);
        this.socket.on('roomJoined', (status: StatusType, msgs: ChatMessage[]) => {
          cb(status, msgs);
        });
      } else {
        console.error('Socket connection not established.');
        // 여기서 적절한 에러 처리를 할 수 있습니다.
      }
    } catch (e) {
      console.log(e);
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
}

export default SocketClient;
