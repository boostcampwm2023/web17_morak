import { MogacoProps } from '@/types';

import { morakAPI } from './morakAPI';

export const mogaco = {
  endPoint: {
    list: '/mogaco',
  },

  list: async () => {
    const { data } = await morakAPI.get<MogacoProps[]>(mogaco.endPoint.list);
    return data;
  },
};
