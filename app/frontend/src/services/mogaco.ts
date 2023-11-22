import { MogacoProps } from '@/types';

import { morakAPI } from './morakAPI';

export const mogaco = {
  endPoint: {
    list: '/mogaco',
    detail: '/mogaco/:id',
  },

  list: async () => {
    const { data } = await morakAPI.get<MogacoProps[]>(mogaco.endPoint.list);
    return data;
  },
  mogacoDetail: async () => {
    const { data } = await morakAPI.get<MogacoProps>(mogaco.endPoint.detail);
    return data;
  },
};
