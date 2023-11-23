import { Mogaco, Participant } from '@/types';

import { morakAPI } from './morakAPI';

export const mogaco = {
  endPoint: {
    list: '/mogaco',
  },

  list: async () => {
    const { data } = await morakAPI.get<Mogaco[]>(mogaco.endPoint.list);
    return data;
  },
  detail: async (id: string) => {
    const { data } = await morakAPI.get<Mogaco>(`/mogaco/${id}`);
    return data;
  },
  participants: async (id: string) => {
    const { data } = await morakAPI.get<Participant[]>(
      `/mogaco/${id}/participants`,
    );
    return data;
  },
};
