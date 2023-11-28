import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { URL } from '@/constants';
import { JsonTypeChanger } from '@/types';
import { getCookies } from '@/utils';

const initialHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
const headers = getCookies('access_token')
  ? { ...initialHeaders, Authorization: `Bearer ${getCookies('access_token')}` }
  : initialHeaders;

const morakAxios = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? '' : URL.API,
  headers,
});

const morakAPI = {
  get: <TResponse>(
    url: string,
    config?: AxiosRequestConfig<unknown>,
  ): Promise<AxiosResponse<JsonTypeChanger<TResponse>, unknown>> =>
    morakAxios.get(url, config),
  post: <TResponse, TRequest>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig<unknown>,
  ): Promise<AxiosResponse<JsonTypeChanger<TResponse>, unknown>> =>
    morakAxios.post(url, data, config),
  patch: <TResponse, TRequest>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig<unknown>,
  ): Promise<AxiosResponse<JsonTypeChanger<TResponse>, unknown>> =>
    morakAxios.patch(url, data, config),
  delete: <TResponse>(
    url: string,
    config?: AxiosRequestConfig<unknown>,
  ): Promise<AxiosResponse<JsonTypeChanger<TResponse>, unknown>> =>
    morakAxios.delete(url, config),
};

export { morakAPI };
