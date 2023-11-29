import { RequestCreateMogacoDto } from '@morak/apitype';

import { Mogaco } from '@/types';

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
  post: async (form: RequestCreateMogacoDto) =>
    morakAPI.post(mogaco.endPoint.index, form),
  // TODO: RequestCreateMogacoDto optional로 변경해야 하지 않을까?
  edit: async (id: string, form: RequestCreateMogacoDto) =>
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
