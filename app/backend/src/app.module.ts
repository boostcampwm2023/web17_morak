import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { MemberModule } from './member/member.module';
import { MogacoModule } from './mogaco-boards/mogaco-boards.module';
import { GroupsModule } from './groups/groups.module';
import { ChatModule } from './chat/chat.module';
import * as redisStore from 'cache-manager-redis-store';
import { MongooseModule } from '@nestjs/mongoose';
import { getSecret } from '@morak/vault';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: getSecret('REDIS_HOST'),
      port: getSecret('REDIS_PORT'),
    }),
    MongooseModule.forRoot(
      `mongodb://${getSecret('CHAT_USER')}:${getSecret('CHAT_PASSWORD')}@${getSecret('MONGO_HOST')}:${getSecret(
        'MONGO_PORT',
      )}/${getSecret(`MONGO_CHAT_DB`)}`,
    ), // MongoDB 연결 문자열
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
