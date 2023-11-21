import axios from 'axios';

import { User } from '@/types';

export const member = {
  endPoint: {
    me: '/member/me',
  },

  myInfo: async () => {
    const { data } = await axios.get<User>(member.endPoint.me);
    return data;
  },
};
