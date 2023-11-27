import { ResponseMemberDto } from '@morak/apitype/dto/response/member';
import { ApiProperty } from '@nestjs/swagger';

export class MemberInformationDto implements ResponseMemberDto {
  @ApiProperty({ description: 'Provider ID of the user', example: '123456' })
  providerId: string;

  @ApiProperty({ description: 'Email address of the user', example: 'bcwm.morak@gmail.com' })
  email: string;

  @ApiProperty({ description: 'Nickname of the user', example: 'morak morak' })
  nickname: string;

  @ApiProperty({ description: "URL of the user's profile picture", example: 'https://example.com/profile.jpg' })
  profilePicture: string;
}
