import { Controller, Control, UseFormSetValue } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';

import { FormInput, MapModal } from '@/components';
import { MOGACO_POST } from '@/constants';
import { useModal } from '@/hooks';

type PostAddressProps = {
  control: Control<RequestCreateMogacoDto>;
  setValue: UseFormSetValue<RequestCreateMogacoDto>;
};

export function PostAddress({ control, setValue }: PostAddressProps) {
  const saveAddress = ({
    address,
    latitude,
    longitude,
  }: Pick<RequestCreateMogacoDto, 'address' | 'latitude' | 'longitude'>) => {
    const options = { shouldDirty: true, shouldValidate: true };
    setValue('address', address, options);
    setValue('latitude', latitude, options);
    setValue('longitude', longitude, options);
  };
  const { openModal } = useModal();
  const onClickInput = () => {
    openModal(<MapModal saveAddress={saveAddress} />);
  };

  return (
    <Controller
      control={control}
      name="address"
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormInput
          label={MOGACO_POST.ADDRESS.LABEL}
          placeholder={MOGACO_POST.ADDRESS.REQUIRED}
          required
          value={value}
          onChange={onChange}
          errorMessage={error && MOGACO_POST.ADDRESS.REQUIRED}
          onClick={onClickInput}
          readOnly
        />
      )}
    />
  );
}
