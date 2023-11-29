import { RequestCreateMogacoDto } from '@morak/apitype';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/queries';
import { mogaco } from '@/services';

export const useSubmitEdit = () => {
  const queryClient = useQueryClient();

  // TODO: RequestCreateMogacoDto optional로 변경해야 하지 않을까?
  return useMutation({
    mutationFn: ({ id, form }: { id: string; form: RequestCreateMogacoDto }) =>
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
    mutationFn: (form: RequestCreateMogacoDto) => mogaco.post(form),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.mogaco.list().queryKey,
      });
    },
  });
};
