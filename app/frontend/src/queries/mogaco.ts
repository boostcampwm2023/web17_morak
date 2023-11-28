import { createQueryKeys } from '@lukemorales/query-key-factory';

import { mogaco } from '@/services';

export const mogacoKeys = createQueryKeys('mogaco', {
  list: (filters?: { filters: { page: number } }) => ({
    queryKey: [{ filters }],
    queryFn: () => mogaco.list(),
  }),
  detail: (id: string) => ({
    queryKey: [id],
    queryFn: () => mogaco.detail(id),
  }),
});
