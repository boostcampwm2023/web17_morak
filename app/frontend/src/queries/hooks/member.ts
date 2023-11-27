import { useQuery } from '@tanstack/react-query';

import { member } from '@/services';

const memberKeys = {
  me: ['me'],
};

export const getMyInfoQuery = {
  queryKey: memberKeys.me,
  queryFn: () => member.myInfo(),
  staleTime: Infinity,
};

export { memberKeys };
export const useGetMyInfoQuery = () => useQuery(getMyInfoQuery);
