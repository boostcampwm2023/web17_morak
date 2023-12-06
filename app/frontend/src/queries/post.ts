import { createQueryKeys } from '@lukemorales/query-key-factory';

import { post } from '@/services';

export const postKeys = createQueryKeys('posts', {
  list: (filters?: { date?: string }) => ({
    queryKey: [{ filters }],
    queryFn: () => post.list(filters),
  }),
  detail: (id: string) => ({
    queryKey: [id],
    queryFn: () => post.detail(id),
  }),
});
