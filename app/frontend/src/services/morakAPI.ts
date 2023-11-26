import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { URL } from '@/constants';
import { getCookies } from '@/utils';

const initialHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const morakAPI = axios.create({
  baseURL: import.meta.env.DEV ? '' : URL.API,
  headers: initialHeaders,
});

const refresh = async () =>
  axios.post<null, AxiosResponse<{ newAccessToken: string }>>(`/auth/refresh`);

const onErrorResponse = async (
  err: AxiosError | Error,
): Promise<AxiosError> => {
  const error = err as unknown as AxiosError;
  const { response } = error;
  const originalConfig = error?.config;

  if (response && response.status === 401) {
    const accessToken = getCookies('access_token');
    if (!accessToken) {
      try {
        const res = await refresh();
        if (res.status === 201 && originalConfig) {
          originalConfig.headers.Authorization = `Bearer ${res.data.newAccessToken}`;
          return await morakAPI.request(originalConfig);
        }
        if (res.status === 401) {
          return await Promise.reject(err);
        }
      } catch (catchErr) {
        const catchError = catchErr as unknown as AxiosError;
        return Promise.reject(catchError);
      }
    }
  }
  return Promise.reject(err);
};

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const currConfig = config;
  const accessToken = getCookies('access_token');
  currConfig.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';

  return config;
};

const onResponse = (response: AxiosResponse) => response;

morakAPI.interceptors.request.use(onRequest);
morakAPI.interceptors.response.use(onResponse, onErrorResponse);

export { morakAPI };
