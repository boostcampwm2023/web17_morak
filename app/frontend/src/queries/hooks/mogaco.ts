import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { post } from '@/services';

export const useDeleteMogacoQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => post.delete(postId),
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
    mutationFn: (postId: string) => post.join(postId),
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
    mutationFn: (postId: string) => post.quit(postId),
    onSuccess: (_, postId) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.mogaco.detail(postId).queryKey,
      });
    },
  });
};
