import * as ChatInterface from '../interface/message.interface';
import * as ChatEvents from '../events/socket.event';
import * as AuthUserDecorator from './decorator/auth-user.decorator';
import * as ChatMessageDecorator from './decorator/message.decorator';
import * as ChatRoomDecorator from './decorator/room.decorator';

export default { ChatInterface, ChatEvents, AuthUserDecorator, ChatMessageDecorator, ChatRoomDecorator }