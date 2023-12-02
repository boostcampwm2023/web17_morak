import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { MemberModule } from './member/member.module';
import * as redisStore from 'cache-manager-redis-store';
import { getSecret } from 'vault';
import { MogacoModule } from './mogaco/mogaco.module';
import { GroupsModule } from './groups/groups.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ChatModule } from './chat/chat.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: getSecret('REDIS_HOST'),
      port: getSecret('REDIS_PORT'),
    }),
    MongooseModule.forRoot(`mongodb://${getSecret('CHAT_USER')}:${getSecret('CHAT_PASSWORD')}@${getSecret('MONGO_HOST')}:${getSecret('MONGO_PORT')}/${getSecret(`MONGO_CHAT_DB`)}`), // MongoDB 연결 문자열
    PrismaModule,
    AuthModule,
    MemberModule,
    MogacoModule,
    GroupsModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}