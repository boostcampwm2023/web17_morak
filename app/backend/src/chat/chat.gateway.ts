import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AuthUser } from '@morak/chat/dist/server/decorator/auth-user.decorator';
import { JoinRoom, LeaveRoom } from '@morak/chat/dist/server/decorator/room.decorator';
import { ChatMessage } from '@morak/chat/dist/server/decorator/message.decorator';
import { StatusCode } from '@morak/chat/dist/interface/message.interface';
import { getSecret } from 'vault';
import ChatService from './chat.service';
import { User } from '@morak/chat/src/interface/user.interface';

const port = parseInt(getSecret('SOCKET_PORT'), 10);

@WebSocketGateway(port, {
  namespace: 'chat',
  cors: { origin: '*' },
  transports: ['websocket']
})
class ChatGateway {
  @WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('joinRoom')
  joinRoom(@AuthUser() user: User, @JoinRoom() room: string) {    
    this.chatService.joinRoom(user, room);
    const messages = this.chatService.loadPrevMessage(room);
    this.server.to(room).emit('roomJoined', { status: StatusCode.success, messages }); // 231129 ccxz84 | chat 임시 메시지 반환
  }

  @SubscribeMessage('leaveRoom')
  leaveRoom(@AuthUser() user: User, @LeaveRoom() room: string) {
    this.chatService.leaveRoom(user, room);
  }

  @SubscribeMessage('chatMessage')
  handleMessage(@AuthUser() user: User, @ChatMessage() message) {
    console.log(message);
    this.server.to(message.room).emit('chat', StatusCode.success, message);
  }

  afterInit(server: Server) {
    console.log('웹소켓 서버 초기화 ✅');
  }
}

export default ChatGateway;
