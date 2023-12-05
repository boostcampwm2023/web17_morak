import { Module } from '@nestjs/common';
import ChatGateway from './chat.gateway';
import ChatService from './chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatMessageDto, ChatMessageSchema } from './dto/chat.dto';
import { ChatRepository } from './chat.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "ChatMessages", schema: ChatMessageSchema }]),
  ],
  providers: [ChatGateway, ChatService, ChatRepository],
})
export class ChatModule {}
