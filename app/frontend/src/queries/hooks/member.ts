import { useQuery } from '@tanstack/react-query';

import { member } from '@/services';

const memberKeys = {
  me: ['me'],
};

export const getMyInfoQuery = {
  queryKey: memberKeys.me,
  queryFn: () => member.myInfo(),
};

export { memberKeys };

export const useGetLoginBasedMyInfoQuery = () => {
  const { data, isLoading, isSuccess } = useQuery({
    ...getMyInfoQuery,
    staleTime: 0,
  });

  const isLogin = isSuccess && data;

  return { isLoading, isLogin };
};

export const useGetMyInfoQuery = () =>
  useQuery({ ...getMyInfoQuery, staleTime: Infinity });
