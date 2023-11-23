import { ApiProperty } from '@nestjs/swagger';

export class MemberInformationDto {
  @ApiProperty({ description: 'Provider ID of the user', example: '123456' })
  providerId: string;

  @ApiProperty({ description: 'Email address of the user', example: 'bcwm.morak@gmail.com' })
  email: string;

  @ApiProperty({ description: 'Nickname of the user', example: 'morak morak' })
  nickname: string;

  @ApiProperty({ description: "URL of the user's profile picture", example: 'https://example.com/profile.jpg' })
  profilePicture: string;
}

export class MemberDto {
  @ApiProperty({ description: 'ID of the Mogaco', example: '3' })
  id: bigint;

  @ApiProperty({ description: 'ProviderId of the Mogaco', example: '123456' })
  providerId: string;

  @ApiProperty({ description: 'email of the Mogaco', example: 'bcwm.morak@gmail.com' })
  email: string;

  @ApiProperty({ description: 'socialType of the Mogaco', example: 'google' })
  socialType: string;
}
