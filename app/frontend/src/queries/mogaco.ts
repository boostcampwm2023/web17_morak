// eslint-disable-next-line import/no-extraneous-dependencies
import { createQueryKeys } from '@lukemorales/query-key-factory';

import { mogaco } from '@/services';

export const mogacoKeys = createQueryKeys('mogaco', {
  list: (filters?: { filters: { page: number } }) => ({
    queryKey: [{ filters }],
    queryFn: () => mogaco.list(),
  }),
  detail: (id: string) => [id],
});
