import { createQueryKeys } from '@lukemorales/query-key-factory';

import { group } from '@/services';

export const groupKeys = createQueryKeys('group', {
  all: () => ({
    queryKey: ['all'],
    queryFn: () => group.all(),
  }),
  myGroup: () => ({
    queryKey: ['myGroup'],
    queryFn: () => group.myGroup(),
  }),
});
