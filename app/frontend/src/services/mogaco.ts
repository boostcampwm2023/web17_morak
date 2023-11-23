import { Mogaco, Participant } from '@/types';

import { morakAPI } from './morakAPI';

export const mogaco = {
  endPoint: {
    index: '/mogaco',
  },

  list: async () => {
    const { data } = await morakAPI.get<Mogaco[]>(mogaco.endPoint.index);
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
  join: async (id: string) => {
    await morakAPI.post(`/mogaco/${id}/join`);
  },
  quit: async (id: string) => {
    await morakAPI.delete(`/mogaco/${id}/join`);
  },
  delete: async (id: string) => {
    const response = await morakAPI.delete(`${mogaco.endPoint.index}/${id}`);
    return response;
  },
};
