import axios from 'axios';

import { User } from '@/types';

export const getMyUserInfo = async () => {
  try {
    const response = await axios.get<User>(`/member/me`);
    return response.data;
  } catch (error) {
    //
  }
  return undefined;
};
