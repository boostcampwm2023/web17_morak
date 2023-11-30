import { RequestCreateMogacoDto } from '@morak/apitype/dto/request/mogaco';
import { IsDateString, IsEnum, IsNotEmpty } from 'class-validator';
import { MogacoStatus } from '../enum/mogaco-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Bigint } from '@morak/apitype/dto/type';

export class CreateMogacoDto implements RequestCreateMogacoDto {
  @ApiProperty({ description: 'Group ID', example: '1' })
  @IsNotEmpty()
  groupId: Bigint;

  @ApiProperty({ description: 'Title of the Mogaco', example: '사당역 모각코' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Contents of the Mogaco', example: '사당역에서 모각코를 열려고 합니다.' })
  @IsNotEmpty()
  contents: string;

  @ApiProperty({ description: 'Date of the Mogaco', example: '2023-11-25T12:00:00.000Z' })
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @ApiProperty({ description: 'Maximum number of participants', example: 5 })
  @IsNotEmpty()
  maxHumanCount: number;

  @ApiProperty({ description: 'Address of the Mogaco', example: '서울특별시 관악구 어디길 22 모락 카페' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Latitude' })
  @IsNotEmpty()
  latitude: number;

  @ApiProperty({ description: 'Longitude' })
  @IsNotEmpty()
  longitude: number;

  @ApiProperty({ description: 'Status of the Mogaco', example: '모집 중' })
  @IsEnum(MogacoStatus, { message: 'Invalid status' })
  status: string;
}

export class StatusDto {
  @ApiProperty({ description: 'Status of the Mogaco', example: '모집 마감' })
  status: string;
}
