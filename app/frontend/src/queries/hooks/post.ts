import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { mogaco } from '@/services';
import { MogacoPostRequest } from '@/types';

export const useSubmitEdit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, form }: { id: string; form: MogacoPostRequest }) =>
      mogaco.edit(id, form),
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
    mutationFn: (form: MogacoPostRequest) => mogaco.post(form),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.mogaco.list().queryKey,
      });
    },
  });
};
