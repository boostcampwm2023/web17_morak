import { createQueryKeys } from '@lukemorales/query-key-factory';

import { group } from '@/services';

export const groupKeys = createQueryKeys('group', {
  myGroup: () => ({
    queryKey: ['myGroup'],
    queryFn: () => group.myGroup(),
  }),
});
