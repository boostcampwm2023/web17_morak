import { ResponseGroupsDto, ResponseGroupsWithMemberCountDto } from '@morak/apitype/dto/response/groups';
import { ApiProperty } from '@nestjs/swagger';
import { Bigint } from '@morak/apitype/dto/type';

export class GroupsDto implements ResponseGroupsDto {
  @ApiProperty({ description: 'ID of the Group', example: '1' })
  id: Bigint;

  @ApiProperty({ description: 'title of the Group', example: '부스트캠프 웹・모바일 8기' })
  title: string;
}

export class GroupsWithMemberCountDto implements ResponseGroupsWithMemberCountDto {
  @ApiProperty({ description: 'ID of the Group', example: '1' })
  id: Bigint;

  @ApiProperty({ description: 'title of the Group', example: '부스트캠프 웹・모바일 8기' })
  title: string;

  @ApiProperty({ description: 'member count of the Group', example: '200' })
  memberCount: number;
}
