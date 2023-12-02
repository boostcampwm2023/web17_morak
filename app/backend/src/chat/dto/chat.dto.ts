import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ChatMessage } from '@morak/chat/src/interface/message.interface';

export type ChatMessageDocument = ChatMessageDto & Document;

@Schema()
export class ChatMessageDto implements ChatMessage {
  @Prop({ required: true })
  room: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  contents: string;

  @Prop({ required: true })
  messageType: string;

  @Prop({ required: true })
  date: Date;
}

export const ChatMessageSchema = SchemaFactory.createForClass(ChatMessageDto);