import axios from 'axios';

import { URL } from '@/constants';
import { getCookies } from '@/utils';

const initialHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
const headers = getCookies('access_token')
  ? { ...initialHeaders, Authorization: `Bearer ${getCookies('access_token')}` }
  : initialHeaders;

export const morakAPI = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? '' : URL.API,
  headers,
  withCredentials: true,
});
