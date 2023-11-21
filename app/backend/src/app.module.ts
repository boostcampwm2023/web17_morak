import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { MemberModule } from './member/member.module';
import * as redisStore from 'cache-manager-redis-store';
import { getSecret } from 'vault';
import { MogacoModule } from './mogaco/mogaco.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: getSecret('REDIS_HOST'),
      port: getSecret('REDIS_PORT'),
    }),
    AuthModule,
    MemberModule,
    MogacoModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
