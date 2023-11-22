import { ApiProperty } from '@nestjs/swagger';
import { MemberDto } from 'src/member/dto/member.dto';

export class MogacoWithMemberDto {
  @ApiProperty({ description: 'ID of the Mogaco', example: '3' })
  id: string;

  @ApiProperty({ description: 'Group ID', example: '1' })
  groupId: string;

  @ApiProperty({ description: 'Title of the Mogaco', example: '사당역 모각코' })
  title: string;

  @ApiProperty({ description: 'Contents of the Mogaco', example: '사당역에서 모각코를 열려고 합니다.' })
  contents: string;

  @ApiProperty({ description: 'Date of the Mogaco', example: '2023-11-25T12:00:00.000Z' })
  date: string;

  @ApiProperty({ description: 'Maximum number of participants', example: 5 })
  maxHumanCount: number;

  @ApiProperty({ description: 'Address of the Mogaco', example: '서울특별시 관악구 어디길 22 모락 카페' })
  address: string;

  @ApiProperty({ description: 'Status of the Mogaco', example: '모집 마감' })
  status: string;

  @ApiProperty({ description: 'Date of Mogaco creation', example: '2023-11-22T12:16:08.913Z' })
  createdAt: string;

  @ApiProperty({ description: 'Date of Mogaco update', example: '2023-11-22T12:16:08.913Z' })
  updatedAt: string;

  @ApiProperty({ description: 'Date of Mogaco deletion', example: null })
  deletedAt: string | null;

  @ApiProperty({ description: 'Member information', type: MemberDto })
  member: MemberDto;
}
