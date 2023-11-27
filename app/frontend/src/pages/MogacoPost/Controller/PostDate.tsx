import { Controller, Control } from 'react-hook-form';

import dayjs from 'dayjs';

import { Input } from '@/components';
import { MOGACO_POST } from '@/constants';
import { MogacoPostForm } from '@/types';

type PostDateProps = {
  control: Control<MogacoPostForm>;
};

export function PostDate({ control }: PostDateProps) {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm');

  return (
    <Controller
      control={control}
      name="date"
      rules={{
        required: MOGACO_POST.DATE.REQUIRED,
        min: { value: currentDate, message: MOGACO_POST.DATE.MIN },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          label={MOGACO_POST.DATE.LABEL}
          type="datetime-local"
          required
          min={currentDate}
          onChange={onChange}
          value={value.replace('Z', '')}
          errorMessage={error && error.message}
        />
      )}
    />
  );
}
