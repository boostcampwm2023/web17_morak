import { createQueryKeys } from '@lukemorales/query-key-factory';

import { tmap } from '@/services';

export const tmapKeys = createQueryKeys('tmap', {
  searchAddress: (filters: { searchKeyword: string }) => ({
    queryKey: [{ filters }],
    queryFn: () => tmap.searchAddress(filters),
  }),
  getAddressFromCoord: (filters: { latitude: number; longitude: number }) => ({
    queryKey: [{ filters }],
    queryFn: () => tmap.getAddressFromCoord(filters),
  }),
});
