import {
  RequestCreateMogacoDto,
  ResponseMogacoDto,
  ResponseMogacoWithMemberDto,
} from '@morak/apitype';

import { morakAPI } from './morakAPI';

export const mogaco = {
  endPoint: {
    default: '/posts',
  },

  list: async (filters?: { date?: string; page?: string }) => {
    const queryString = filters
      ? `?${new URLSearchParams(filters).toString()}`
      : '';
    const { data } = await morakAPI.get<ResponseMogacoDto[]>(
      `${mogaco.endPoint.default}${queryString}`,
    );
    return data;
  },
  detail: async (id: string) => {
    const { data } = await morakAPI.get<ResponseMogacoWithMemberDto>(
      `${mogaco.endPoint.default}/${id}`,
    );
    return data;
  },
  post: async (form: Partial<RequestCreateMogacoDto>) =>
    morakAPI.post(mogaco.endPoint.default, form),
  edit: async (id: string, form: Partial<RequestCreateMogacoDto>) =>
    morakAPI.put(`${mogaco.endPoint.default}/${id}`, form),
  delete: async (id: string) => {
    const response = await morakAPI.delete(`${mogaco.endPoint.default}/${id}`);
    return response;
  },
  join: async (id: string) => {
    const response = await morakAPI.post(
      `${mogaco.endPoint.default}/${id}/join`,
    );
    return response;
  },
  quit: async (id: string) => {
    const response = await morakAPI.delete(
      `${mogaco.endPoint.default}/${id}/join`,
    );
    return response;
  },
  myMogaco: async () => {
    const { data } = await morakAPI.get<ResponseMogacoDto[]>(
      `${mogaco.endPoint.default}/my-mogacos`,
    );
    return data;
  },
};
