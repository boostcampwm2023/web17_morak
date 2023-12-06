import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ChatMessageDto, ChatMessageDocument } from './dto/chat.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ChatRepository {
  constructor(
    @InjectModel('ChatMessages') private chatMessageModel: Model<ChatMessageDocument>,
    private prisma: PrismaService,
  ) {}

  async saveChatMessage(createChatDto: ChatMessageDto): Promise<ChatMessageDto> {
    const createdChat = new this.chatMessageModel(createChatDto);
    return createdChat.save();
  }

  async getChatMessages(room: string, cursorDate: Date, limit: number = 20): Promise<ChatMessageDto[]> {
    return this.chatMessageModel
      .find({ room, date: { $lt: cursorDate } })
      .sort({ date: -1 })
      .limit(limit)
      .select('-_id -__v') // _id와 __v 필드를 제외합니다.
      .exec();
  }

  async isUserInGroup(groupId: number, userId: number): Promise<boolean> {
    const count = await this.prisma.groupToUser.count({
      where: {
        AND: [{ groupId: groupId }, { userId: userId }],
      },
    });
    return count > 0;
  }
}
