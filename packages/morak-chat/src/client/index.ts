import io from 'socket.io-client';

class SocketClient {
  private socket: SocketIOClient.Socket | null = null;
  private static URL: string;

  SocketClient(URL: string) {
    SocketClient.URL = URL;
    this.connectSocket();
  }

  connectSocket(): void {
    this.socket = io(SocketClient.URL);
  }

  disconnectSocket(): void {
    if(this.socket) this.socket.disconnect();
  }

  joinRoom(room: string): void {
    if (this.socket && room) {
      this.socket.emit('joinRoom', room);
    }
  }

  leaveRoom(room: string): void {
    if (this.socket && room) {
      this.socket.emit('leaveRoom', room);
    }
  }

  // cb는 콜백 함수로, 첫 번째 인자는 오류(있을 경우)이고 두 번째 인자는 메시지입니다.
  subscribeToChat(cb: (err: Error | null, msg: any) => void): void {
    if (!this.socket) return;
    this.socket.on('chat', msg => {
      console.log('Websocket event received!');
      return cb(null, msg);
    });
  }

  sendMessage(user, message: string): void {
    if (this.socket) this.socket.emit('chatMessage', { user, message });
  }
}

export default SocketClient;