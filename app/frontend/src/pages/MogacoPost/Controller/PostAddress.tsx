import { Controller, Control } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';

import { Input, MapModal } from '@/components';
import { MOGACO_POST } from '@/constants';
import { useModal } from '@/hooks';

type PostAddressProps = {
  control: Control<RequestCreateMogacoDto>;
};

export function PostAddress({ control }: PostAddressProps) {
  const { openModal } = useModal();
  const onClickInput = () => {
    openModal(<MapModal />);
  };
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
          onClick={onClickInput}
        />
      )}
    />
  );
}
