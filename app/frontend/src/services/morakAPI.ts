import axios from 'axios';

import { URL } from '@/constants';

export const morakAPI = axios.create({
  baseURL: import.meta.env.DEV ? '' : URL.API,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});
