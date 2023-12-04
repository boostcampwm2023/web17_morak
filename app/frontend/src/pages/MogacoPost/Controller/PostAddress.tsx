import { Controller, Control } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';

import { Input } from '@/components';
import { MOGACO_POST } from '@/constants';

type PostAddressProps = {
  control: Control<RequestCreateMogacoDto>;
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
