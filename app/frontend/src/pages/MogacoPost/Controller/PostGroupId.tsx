import { Controller, Control } from 'react-hook-form';

import { Input } from '@/components';
import { MOGACO_POST } from '@/constants';
import { MogacoPostForm } from '@/types';

type PostGroupIdProps = {
  control: Control<MogacoPostForm>;
  isEdit?: boolean;
};

export function PostGroupId({ control, isEdit = false }: PostGroupIdProps) {
  return (
    <Controller
      control={control}
      name="groupId"
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          label={MOGACO_POST.GROUP.LABEL}
          placeholder={MOGACO_POST.GROUP.REQUIRED}
          required
          disabled={isEdit}
          onChange={onChange}
          value={value}
          errorMessage={error && MOGACO_POST.GROUP.REQUIRED}
        />
      )}
    />
  );
}
