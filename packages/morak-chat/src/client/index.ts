import io from 'socket.io-client';
import { RequestChatUser } from '../interface/user.interface'
import { ChatMessage, StatusType } from '../interface/message.interface';

class SocketClient {
  private socket: SocketIOClient.Socket | null = null;
  private static URL: string;

  SocketClient(URL: string) {
    SocketClient.URL = URL;
  }

  connectSocket(): void {
    this.socket = io(SocketClient.URL);
  }

  disconnectSocket(): void {
    if(this.socket) this.socket.disconnect();
  }

  joinRoom(user: RequestChatUser, room: string): void {
    this.connectSocket();
    if (this.socket && room) {
      this.socket.emit('joinRoom',{ user, room });
    }
  }

  leaveRoom(user: RequestChatUser, room: string): void {
    if (this.socket && room) {
      this.socket.emit('leaveRoom', { user, room });
    }
    this.disconnectSocket();
  }

  subscribeToChat(cb: (status: StatusType, msg: ChatMessage) => void): void {
    if (!this.socket) return;

    this.socket.on('chat', (status: StatusType, msg: ChatMessage) => {
      return cb(status, msg); 
    });
  }

  sendMessage(user: RequestChatUser, message: string): void {
    if (this.socket) this.socket.emit('chatMessage', { user, message });
  }
}

export default SocketClient;
