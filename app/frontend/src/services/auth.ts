import { RequestLogoutUserDto } from '@morak/apitype';

import { morakAPI } from './morakAPI';

export const auth = {
  endPoint: {
    default: '/auth',
    logout: '/auth/logout',
  },

  logout: async (data: RequestLogoutUserDto) =>
    morakAPI.post(auth.endPoint.logout, data),
};
