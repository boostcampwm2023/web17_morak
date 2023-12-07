import io, { Socket } from 'socket.io-client';
import { RequestUserRoomDto } from '../interface/user.interface';
import { ChatMessage, StatusType } from '../interface/message.interface';

export type CallBack = (status: StatusType, msgs: ChatMessage[]) => void;

class SocketClient {
  private socket: Socket | null = null;
  private static URL: string;
  private static path: string;

  constructor(URL: string, path: string) {
    SocketClient.URL = URL;
    SocketClient.path = path;
  }

  connectSocket(): void {
    this.socket = io(SocketClient.URL, { path: SocketClient.path });
  }

  disconnectSocket(): void {
    if (this.socket) this.socket.disconnect();
  }

  joinRoom(userRoomDto: RequestUserRoomDto, cb: CallBack): void {
    try {
      this.connectSocket();
      if (this.socket) {
        this.socket!.on("connect", () => {
          this.socket!.emit('joinRoom', userRoomDto);
          this.socket!.on('postJoinRoom', (status: StatusType) => {
            cb(status, [])
          });
        });
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

  requestPrevMessage(room: string, cursorDate: Date, cb: CallBack): void {
    if (this.socket && room) {
      this.socket.emit('requestPrevMessage', { room, cursorDate });
      this.socket.once(
        'receivePrevMessage',
        (status: StatusType, msgs: ChatMessage[]) => {
          cb(status, msgs);
        }
      );
    }
  }
}

export default SocketClient;