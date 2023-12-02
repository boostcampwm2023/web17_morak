import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ChatMessageDto, ChatMessageDocument } from './dto/chat.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class ChatRepository {
  constructor(
    @InjectModel(ChatMessageDto.name) private chatMessageModel: Model<ChatMessageDocument>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async saveChatMessage(createChatDto: ChatMessageDto): Promise<ChatMessageDto> {
    const createdChat = new this.chatMessageModel(createChatDto);
    return createdChat.save();
  }

  async getChatMessages(room: string, cursorDate: Date, limit: number = 10): Promise<ChatMessageDto[]> {
    return this.chatMessageModel
      .find({ room, date: { $lt: cursorDate } })
      .sort({ date: -1 })
      .limit(limit)
      .exec();
  }
}
