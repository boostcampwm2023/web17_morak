import { createQueryKeys } from '@lukemorales/query-key-factory';

import { mogaco } from '@/services';

export const mogacoKeys = createQueryKeys('mogaco', {
  list: (filters?: { date?: string }) => ({
    queryKey: [{ filters }],
    queryFn: () => mogaco.list(filters),
  }),
  detail: (id: string) => ({
    queryKey: [id],
    queryFn: () => mogaco.detail(id),
  }),
});
