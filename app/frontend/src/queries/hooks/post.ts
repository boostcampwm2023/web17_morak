import { RequestCreateMogacoDto } from '@morak/apitype';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { mogaco } from '@/services';

export const useSubmitEdit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      form,
    }: {
      id: string;
      form: Partial<RequestCreateMogacoDto>;
    }) => mogaco.edit(id, form),
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
    mutationFn: (form: Partial<RequestCreateMogacoDto>) => mogaco.post(form),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.mogaco.list().queryKey,
      });
    },
  });
};
