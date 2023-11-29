import { ResponseGroupsDto } from '@morak/apitype';

import { morakAPI } from './morakAPI';

export const group = {
  endPoint: {
    default: '/group',
  },

  myGroup: async () => {
    const { data } = await morakAPI.get<ResponseGroupsDto>(
      group.endPoint.default,
    );
    return data;
  },
};
