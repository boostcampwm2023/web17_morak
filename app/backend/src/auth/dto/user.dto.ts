import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  provider_id: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  nickname: string;

  @ApiProperty()
  @IsString()
  social_type: string;

  @ApiProperty()
  @IsString()
  profilePicture: string;
}

export class LogoutDto {
  @ApiProperty()
  @IsString()
  provider_id: string;
}
