import { ResponseParticipant } from '@morak/apitype/dto/response/participant';
import { ApiProperty } from '@nestjs/swagger';
import { Bigint } from '@morak/apitype/dto/type';

export class ParticipantResponseDto implements ResponseParticipant {
  @ApiProperty({ description: 'ID of the Member', example: '1' })
  id: Bigint;

  @ApiProperty({ description: 'Provider ID', example: '117187214221556274884' })
  providerId: string;

  @ApiProperty({ description: 'Email of the Member', example: 'bcwm.morak@gmail.com' })
  email: string;

  @ApiProperty({ description: 'Nickname of the user', example: 'morak morak' })
  nickname: string;

  @ApiProperty({ description: "URL of the user's profile picture", example: 'https://example.com/profile.jpg' })
  profilePicture: string;
}
