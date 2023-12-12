import { Controller, Control } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';
import dayjs from 'dayjs';

import { FormInput } from '@/components';
import { MOGACO_POST } from '@/constants';

type PostDateProps = {
  control: Control<RequestCreateMogacoDto>;
  isEdit?: boolean;
};

export function PostDate({ control, isEdit = false }: PostDateProps) {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm');

  return (
    <Controller
      control={control}
      name="date"
      rules={{
        required: MOGACO_POST.DATE.REQUIRED,
        min: {
          value: isEdit ? '' : currentDate,
          message: MOGACO_POST.DATE.MIN,
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormInput
          label={MOGACO_POST.DATE.LABEL}
          type="datetime-local"
          disabled={isEdit}
          min={isEdit ? undefined : currentDate}
          onChange={onChange}
          value={value.replace('Z', '')}
          errorMessage={error && error.message}
        />
      )}
    />
  );
}
