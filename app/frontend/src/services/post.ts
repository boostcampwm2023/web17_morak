import {
  RequestCreateMogacoDto,
  ResponseMogacoDto,
  ResponseMogacoWithMemberDto,
} from '@morak/apitype';

import { morakAPI } from './morakAPI';

export const post = {
  endPoint: {
    default: '/posts',
  },

  list: async (filters?: { date?: string }) => {
    const queryString = filters
      ? `?${new URLSearchParams(filters).toString()}`
      : '';
    const { data } = await morakAPI.get<ResponseMogacoDto[]>(
      `${post.endPoint.default}${queryString}`,
    );
    return data;
  },
  detail: async (id: string) => {
    const { data } = await morakAPI.get<ResponseMogacoWithMemberDto>(
      `${post.endPoint.default}/${id}`,
    );
    return data;
  },
  post: async (form: Partial<RequestCreateMogacoDto>) =>
    morakAPI.post(post.endPoint.default, form),
  edit: async (id: string, form: Partial<RequestCreateMogacoDto>) =>
    morakAPI.patch(`${post.endPoint.default}/${id}`, form),
  delete: async (id: string) => {
    const response = await morakAPI.delete(`${post.endPoint.default}/${id}`);
    return response;
  },
  join: async (id: string) => {
    const response = await morakAPI.post(`${post.endPoint.default}/${id}/join`);
    return response;
  },
  quit: async (id: string) => {
    const response = await morakAPI.delete(
      `${post.endPoint.default}/${id}/join`,
    );
    return response;
  },
};
