import { Controller, Control } from 'react-hook-form';

import { Input } from '@/components';
import { MOGACO_POST } from '@/constants';
import { MogacoPostForm } from '@/types';

type PostAddressProps = {
  control: Control<MogacoPostForm>;
};

export function PostAddress({ control }: PostAddressProps) {
  return (
    <Controller
      control={control}
      name="address"
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          label={MOGACO_POST.ADDRESS.LABEL}
          placeholder={MOGACO_POST.ADDRESS.REQUIRED}
          required
          onChange={onChange}
          value={value}
          errorMessage={error && MOGACO_POST.ADDRESS.REQUIRED}
        />
      )}
    />
  );
}
