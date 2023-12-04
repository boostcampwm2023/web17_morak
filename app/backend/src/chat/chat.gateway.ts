import { WebSocketGateway, WebSocketServer, SubscribeMessage, ConnectedSocket, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AuthUser } from '@morak/chat/dist/server/decorator/auth-user.decorator';
import { JoinRoom, LeaveRoom } from '@morak/chat/dist/server/decorator/room.decorator';
import { ChatMessage } from '@morak/chat/dist/server/decorator/message.decorator';
import { RequestGetPrevChatMessage, StatusCode } from '@morak/chat/dist/interface/message.interface';
import { getSecret } from '@morak/vault';
import ChatService from './chat.service';
import { User } from '@morak/chat/src/interface/user.interface';
import { Socket } from 'dgram';

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
  joinRoom(@ConnectedSocket() client: Socket, @AuthUser() user: User, @JoinRoom() room: string) {
    // 231203 ccxz84 | chat logging 유저 룸 떠나기 메시지 로깅 필요
    console.log(`${user} join ${room}`);
    try {
      const messages = this.chatService.loadMessageDB(room, new Date());
      messages.then(data => {
        client.emit('postJoinRoom', StatusCode.success, data); // 231129 ccxz84 | chat 임시 메시지 반환
      });
    } catch (error) {
      client.emit('postJoinRoom', StatusCode.error, 'join Room Error');
    }
  }

  @SubscribeMessage('leaveRoom')
  leaveRoom(@AuthUser() user: User, @LeaveRoom() room: string) {
    // 231203 ccxz84 | chat logging 유저 룸 떠나기 메시지 로깅 필요
    console.log(`${user} leave ${room}`);
  }

  @SubscribeMessage('chatMessage')
  handleMessage(@AuthUser() user: User, @ChatMessage() message) {
    this.chatService.writeMessageDB(message);
    this.server.to(message.room).emit('chat', StatusCode.success, message);
  }

  @SubscribeMessage('requestPrevMessage')
  getPrevMessages(@ConnectedSocket() client: Socket, @MessageBody() data: RequestGetPrevChatMessage) {
    try{
      if (data.room && data.cursorDate) {
        const messages = this.chatService.loadMessageDB(data.room, data.cursorDate);
        messages.then(data => {
          client.emit('receivePrevMessage', StatusCode.success, data);
        });
      }
    } catch (error) {
      client.emit('receivePrevMessage', StatusCode.error, 'Get Chat Message Error');
    }
    
  }

  afterInit(server: Server) {
    console.log('웹소켓 서버 초기화 ✅');
  }
}

export default ChatGateway;
