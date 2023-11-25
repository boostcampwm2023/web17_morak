import { Member, Mogaco, MogacoPostRequest } from '@/types';

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
    const { data } = await morakAPI.get<Mogaco>(
      `${mogaco.endPoint.index}/${id}`,
    );
    return data;
  },
  post: async (form: MogacoPostRequest) =>
    morakAPI.post(mogaco.endPoint.index, form),
  delete: async (id: string) => {
    const response = await morakAPI.delete(`${mogaco.endPoint.index}/${id}`);
    return response;
  },
  participants: async (id: string) => {
    const { data } = await morakAPI.get<Member[]>(
      `${mogaco.endPoint.index}/${id}/participants`,
    );
    return data;
  },
  join: async (id: string) => {
    const response = await morakAPI.post(`${mogaco.endPoint.index}/${id}/join`);
    return response;
  },
  quit: async (id: string) => {
    const response = await morakAPI.delete(
      `${mogaco.endPoint.index}/${id}/join`,
    );
    return response;
  },
};