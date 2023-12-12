import { Controller, Control } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';

import { FormInput } from '@/components';
import { MOGACO_POST } from '@/constants';

type PostMaxHumanCountProps = {
  control: Control<RequestCreateMogacoDto>;
  isEdit?: boolean;
};

export function PostMaxHumanCount({
  control,
  isEdit = false,
}: PostMaxHumanCountProps) {
  return (
    <Controller
      control={control}
      name="maxHumanCount"
      rules={{
        required: MOGACO_POST.COUNT.REQUIRED,
        pattern: {
          value: /^[0-9]*$/,
          message: MOGACO_POST.COUNT.PATTERN,
        },
        min: {
          value: MOGACO_POST.COUNT.MIN_VALUE,
          message: MOGACO_POST.COUNT.MIN,
        },
        max: {
          value: MOGACO_POST.COUNT.MAX_VALUE,
          message: MOGACO_POST.COUNT.MAX,
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormInput
          label={MOGACO_POST.COUNT.LABEL}
          type="number"
          placeholder={MOGACO_POST.COUNT.REQUIRED}
          required
          disabled={isEdit}
          onChange={onChange}
          value={value}
          errorMessage={error && error.message}
        />
      )}
    />
  );
}
