import { RequestCreateMogacoDto } from '@morak/apitype';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { post } from '@/services';

export const useDeleteMogacoQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => post.delete(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.posts.list().queryKey,
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
        queryKey: queryKeys.posts.detail(postId).queryKey,
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
        queryKey: queryKeys.posts.detail(postId).queryKey,
      });
    },
  });
};

export const useSubmitEdit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      form,
    }: {
      id: string;
      form: Partial<RequestCreateMogacoDto>;
    }) => post.edit(id, form),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.posts.list().queryKey,
      });
    },
  });
};

export const useSubmitPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (form: Partial<RequestCreateMogacoDto>) => post.post(form),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.posts.list().queryKey,
      });
    },
  });
};
