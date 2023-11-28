import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { mogaco } from '@/services';

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

export const useJoinMogacoQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => mogaco.join(postId),
    onSuccess: (_, postId) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.mogaco.detail(postId).queryKey,
      });
    },
  });
};

export const useQuitMogacoQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => mogaco.quit(postId),
    onSuccess: (_, postId) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.mogaco.detail(postId).queryKey,
      });
    },
  });
};
