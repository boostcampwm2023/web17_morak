import { ChangeEvent, useEffect, useState } from 'react';
import { Controller, Control } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';

import { Input } from '@/components';
import { MOGACO_POST } from '@/constants';
import { tmap } from '@/services';

type PostAddressProps = {
  control: Control<RequestCreateMogacoDto>;
};

export function PostAddress({ control }: PostAddressProps) {
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const getAddress = async () => {
      const data = await tmap.searchAddress(searchKeyword);
      const addressData = data.searchPoiInfo.pois.poi;
      // eslint-disable-next-line no-console
      console.log(addressData);
    };

    if (searchKeyword) {
      getAddress();
    }
  }, [searchKeyword]);

  return (
    <Controller
      control={control}
      name="address"
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Input
            label={MOGACO_POST.ADDRESS.LABEL}
            placeholder={MOGACO_POST.ADDRESS.REQUIRED}
            required
            onChange={onChange}
            value={value}
            errorMessage={error && MOGACO_POST.ADDRESS.REQUIRED}
          />
          <input
            value={searchKeyword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchKeyword(e.currentTarget.value)
            }
          />
        </>
      )}
    />
  );
}
