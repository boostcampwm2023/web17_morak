import { Cookies, CookieSetOptions } from 'react-cookie';

const cookies = new Cookies();

export const getCookies = (name: string) => cookies.get(name);

export const setCookie = (name: string, value: string, options: CookieSetOptions) => cookies.set(name, value, options);
