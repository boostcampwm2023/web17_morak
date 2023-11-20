import axios from 'axios';

type User = {
  providerId: string;
  email: string;
  nickname: string;
  profilePicture: string;
};

export const getMyUserInfo = async () => {
  const response = await axios.get<User>(`/member/me`);
  return response.data;
};
