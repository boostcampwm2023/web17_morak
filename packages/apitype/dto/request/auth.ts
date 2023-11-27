export interface RequestLoginUserDto {
  providerId: string;
  email: string;
  nickname: string;
  socialType: string;
  profilePicture: string;
}

export interface RequestLogoutUserDto {
  providerId: string;
}
