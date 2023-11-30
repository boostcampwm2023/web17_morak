import { ChangeEvent, useState } from 'react';
import { Controller, Control } from 'react-hook-form';

import { RequestCreateMogacoDto } from '@morak/apitype';
import { useQuery } from '@tanstack/react-query';

import { Input, MapModal } from '@/components';
import { MOGACO_POST } from '@/constants';
import { useModal } from '@/hooks';
import { queryKeys } from '@/queries';

type PostAddressProps = {
  control: Control<RequestCreateMogacoDto>;
};

export function PostAddress({ control }: PostAddressProps) {
  const { openModal } = useModal();
  const onClickInput = () => {
    openModal(<MapModal />);
  };
  const [searchKeyword, setSearchKeyword] = useState('');
  const { data: tmapResponse } = useQuery({
    ...queryKeys.tmap.searchAddress({
      searchKeyword,
    }),
    enabled: !!searchKeyword,
  });
  const addressData = tmapResponse?.searchPoiInfo?.pois?.poi;

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
            value={searchKeyword || value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchKeyword(e.currentTarget.value)
            }
            errorMessage={error && MOGACO_POST.ADDRESS.REQUIRED}
            onClick={onClickInput}
          />
          <input
            value={searchKeyword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchKeyword(e.currentTarget.value)
            }
          />
          {addressData && (
            <select
              onChange={(event) => {
                onChange(event.target.value);
                setSearchKeyword('');
              }}
            >
              (
              {addressData.map((address) => {
                const fullAddress =
                  address.newAddressList.newAddress[0].fullAddressRoad;
                const addressName = address.name;
                return (
                  <option
                    key={address.pkey}
                    value={`${fullAddress} ${addressName}`}
                  >
                    {`${fullAddress} ${addressName}`}
                  </option>
                );
              })}
              )
            </select>
          )}
        </>
      )}
    />
  );
}
