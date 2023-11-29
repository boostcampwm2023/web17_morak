import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RequestChatUser } from '@morak/chat/src/interface/user.interface';
import { AuthUser } from '@morak/chat/src/server/decorator/auth-user.decorator';
import { JoinRoom, LeaveRoom } from '@morak/chat/src/server/decorator/room.decorator';
import { ChatMessage } from '@morak/chat/src/server/decorator/message.decorator';
import { getSecret } from 'vault';
import ChatService from './chat.service';

const port = getSecret('SOCKET_PORT');

@WebSocketGateway(port)
class ChatGateway {
  @WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('joinRoom')
  joinRoom(@AuthUser() user: RequestChatUser, @JoinRoom() room: string) {    
    this.chatService.joinRoom(user, room);
    this.server.to(room).emit('roomJoined', `connect success`); // 231129 ccxz84 | chat 임시 메시지 반환
  }

  @SubscribeMessage('leaveRoom')
  leaveRoom(@AuthUser() user: RequestChatUser, @LeaveRoom() room: string) {
    console.log(`leave room success`);
  }

  @SubscribeMessage('chatMessage')
  handleMessage(@AuthUser() user: RequestChatUser, room: string, @ChatMessage() message) {
    this.server.to(message.room).emit('chat_message', message);
  }
}

export default ChatGateway;
