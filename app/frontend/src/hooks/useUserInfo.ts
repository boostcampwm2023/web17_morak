import { jwtDecode } from 'jwt-decode';

type UserToken = {
  providerId: string;
  socialType: 'google';
  email: string;
  profilePicture: string;
  nickname: string;
};
export const useUserInfo = (accessToken: string) => {
  const { providerId, socialType, email, profilePicture, nickname } =
    jwtDecode<UserToken>(accessToken);

  return { providerId, socialType, email, profilePicture, nickname };
};
