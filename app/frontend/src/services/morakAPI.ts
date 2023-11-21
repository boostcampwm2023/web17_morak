import axios from 'axios';

const morakAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

export default morakAPI;
