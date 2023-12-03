import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';

import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { GroupsRepository } from './groups.repository';

@Module({
  imports: [AuthModule],
  controllers: [GroupsController],
  providers: [GroupsService, GroupsRepository],
})
export class GroupsModule {}
