import { RequestGroupsDto } from '@morak/apitype/dto/request/groups';

export class CreateGroupsDto implements RequestGroupsDto {
  title: string;
}
