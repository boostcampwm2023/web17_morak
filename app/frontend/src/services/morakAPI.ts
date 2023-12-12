import axios from 'axios';

import { URL } from '@/constants';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const morakAPI = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? '' : URL.API,
  headers,
  withCredentials: true,
});
