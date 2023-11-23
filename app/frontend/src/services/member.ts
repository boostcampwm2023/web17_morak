import { UserInfo } from '@/types';

import { morakAPI } from './morakAPI';

export const member = {
  endPoint: {
    default: '/member',
    me: '/member/me',
  },

  myInfo: async () => {
    const { data } = await morakAPI.get<UserInfo>(member.endPoint.me);
    return data;
  },

  userInfoById: async (id: string) => {
    const { data } = await morakAPI.get<UserInfo>(
      `${member.endPoint.default}/${id}`,
    );
    return data;
  },
};
