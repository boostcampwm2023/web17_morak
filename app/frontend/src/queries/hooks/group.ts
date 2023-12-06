import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { group } from '@/services';

export const useJoinGroupQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => group.join({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.group.myGroup().queryKey,
      });
    },
  });
};

export const useLeaveGroupQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => group.leave({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.group.myGroup().queryKey,
      });
    },
  });
};
