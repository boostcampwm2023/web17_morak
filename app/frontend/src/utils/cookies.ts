import { Cookies } from 'react-cookie';

type CookieSetOptions = {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'lax' | 'strict';
};

const cookies = new Cookies();

export const getCookies = (name: string): string => cookies.get(name);

export const setCookie = (
  name: string,
  value: string,
  options: CookieSetOptions,
) => cookies.set(name, value, options);
