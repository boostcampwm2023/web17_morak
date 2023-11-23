import { useMutation, useQueryClient } from '@tanstack/react-query';

import { mogaco } from '@/services';

import { queryKeys } from '..';

export const useDeleteMogacoQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => mogaco.delete(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.mogaco.list().queryKey,
      });
    },
  });
};
