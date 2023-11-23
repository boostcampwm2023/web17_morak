import { createQueryKeys } from '@lukemorales/query-key-factory';

import { member } from '@/services';

export const memberKeys = createQueryKeys('member', {
  me: () => ({ queryKey: ['me'], queryFn: () => member.myInfo() }),
});
