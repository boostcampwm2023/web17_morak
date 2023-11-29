import { Mogaco, MogacoPostRequest } from '@/types';

import { morakAPI } from './morakAPI';

export const mogaco = {
  endPoint: {
    index: '/mogaco',
  },

  list: async (filters?: { date?: string }) => {
    const queryString = filters
      ? `?${new URLSearchParams(filters).toString()}`
      : '';
    const { data } = await morakAPI.get<Mogaco[]>(
      `${mogaco.endPoint.index}${queryString}`,
    );
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
  edit: async (id: string, form: MogacoPostRequest) =>
    morakAPI.patch(`${mogaco.endPoint.index}/${id}`, form),
  delete: async (id: string) => {
    const response = await morakAPI.delete(`${mogaco.endPoint.index}/${id}`);
    return response;
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
