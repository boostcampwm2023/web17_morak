import { RequestGroupsDto } from '@morak/apitype/dto/request/groups';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupsDto implements RequestGroupsDto {
  @ApiProperty({ description: 'Title of the Group', example: '부스트캠프 웹·모바일 8기' })
  @IsNotEmpty()
  title: string;
}
