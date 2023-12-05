import { RequestCreateMogacoDto } from '@morak/apitype';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { post } from '@/services';

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
        queryKey: queryKeys.mogaco.list().queryKey,
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
        queryKey: queryKeys.mogaco.list().queryKey,
      });
    },
  });
};
