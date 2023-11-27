import { RequestLoginUserDto, RequestLogoutUserDto } from '@morak/apitype/dto/request/auth';
import { IsString, IsEmail, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto implements RequestLoginUserDto {
  @ApiProperty()
  @IsString()
  providerId: string;

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
  socialType: string;

  @ApiProperty()
  @IsString()
  profilePicture: string;
}

export class LogoutDto implements RequestLogoutUserDto {
  @ApiProperty()
  @IsString()
  providerId: string;
}
