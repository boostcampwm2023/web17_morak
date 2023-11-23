import { Mogaco } from '@/types';

import { morakAPI } from './morakAPI';

export const mogaco = {
  endPoint: {
    list: '/mogaco',
    detail: '/mogaco/:id',
  },

  list: async () => {
    const { data } = await morakAPI.get<Mogaco[]>(mogaco.endPoint.list);
    return data;
  },
  detail: async () => {
    const { data } = await morakAPI.get<Mogaco>(mogaco.endPoint.detail);
    return data;
  },
};
