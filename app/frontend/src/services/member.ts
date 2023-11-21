import { UserInfo } from '@/types';

import { morakAPI } from './morakAPI';

export const member = {
  endPoint: {
    me: '/member/me',
  },

  myInfo: async () => {
    const { data } = await morakAPI.get<UserInfo>(member.endPoint.me);
    return data;
  },
};
