import { ApiProperty } from '@nestjs/swagger';

export class ParticipantResponseDto {
  @ApiProperty({ description: 'ID of the Member', example: '1' })
  id: string;

  @ApiProperty({ description: 'Provider ID', example: '117187214221556274884' })
  providerId: string;

  @ApiProperty({ description: 'Email of the Member', example: 'bcwm.morak@gmail.com' })
  email: string;

  @ApiProperty({ description: 'Social Type', example: 'google' })
  socialType: string;

  @ApiProperty({ description: 'Date of Member creation', example: '2023-11-22T04:55:02.988Z' })
  createdAt: string;
}
