import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatUser } from '@morak/chat/src/interface/user.interface';
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
  joinRoom(@AuthUser() user: ChatUser, @JoinRoom() room: string, @ConnectedSocket() client: Socket) {    
    console.log(`joinRoom: User ${user.nickname} joined room ${room}`);
    this.chatService.joinRoom(user, room);
    this.server.to(room).emit('roomJoined', `User ${user.nickname} has joined the room ${room}`);
  }

  @SubscribeMessage('leaveRoom')
  leaveRoom(@AuthUser() user: ChatUser, @LeaveRoom() room: string) {
    console.log(`joinRoom: User ${user.nickname} joined room ${room}`);
  }

  @SubscribeMessage('chatMessage')
  handleMessage(@AuthUser() user: ChatUser, room: string, @ChatMessage() message) {
    this.server.to(message.room).emit('chat_message', message);
  }
}

export default ChatGateway;