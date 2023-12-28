import { useEffect, useRef, useState } from 'react';

import { RequestCreateMogacoDto } from '@morak/apitype';
import { Button } from '@morak/ui';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { FormInput } from '@/components';
import { useDebounce, useMap } from '@/hooks';
import { queryKeys } from '@/queries';
import { useModalAtom } from '@/stores';
import { sansBold14, sansRegular12, sansRegular14 } from '@/styles/font.css';

import * as styles from './index.css';

type MapModalProps = {
  saveAddress: ({
    address,
    latitude,
    longitude,
  }: Pick<
    RequestCreateMogacoDto,
    'address' | 'latitude' | 'longitude'
  >) => void;
};

export function MapModal({ saveAddress }: MapModalProps) {
  const [open, setOpen] = useModalAtom();
  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedSearchKeyword = useDebounce(searchKeyword);
  const mapRef = useRef<HTMLDivElement>(null);

  const {
    coord,
    setCoord,
    currentAddress: selectedAddress,
    initMapModal,
  } = useMap(mapRef, true);

  const { data: tmapResponse } = useQuery({
    ...queryKeys.tmap.searchAddress({
      searchKeyword: debouncedSearchKeyword,
    }),
    enabled: !!debouncedSearchKeyword,
    placeholderData: keepPreviousData,
  });

  const addressData = tmapResponse?.searchPoiInfo?.pois?.poi;

  const resetSearchKeyword = () => {
    setSearchKeyword('');
  };

  const closeModal = () => {
    resetSearchKeyword();
    setOpen(false);
  };

  const onClickConfirm = () => {
    const { latitude, longitude } = coord;
    if (!(latitude && longitude)) return;
    saveAddress({ address: selectedAddress, latitude, longitude });
    closeModal();
  };

  const onClickAddressListItem = <
    Event extends React.MouseEvent | React.KeyboardEvent,
  >(
    e: Event,
  ) => {
    const coordinate = {
      latitude: Number(e.currentTarget.getAttribute('data-lat')),
      longitude: Number(e.currentTarget.getAttribute('data-lon')),
    };
    setCoord(coordinate);
  };

  useEffect(
    () => () => {
      initMapModal();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <dialog className={styles.container} open={open}>
      <div className={styles.form}>
        <div className={styles.currentAddress}>
          <span className={sansRegular14}>선택한 주소: </span>
          <span className={sansBold14}>{selectedAddress}</span>
        </div>
        <div className={styles.addressWrapper}>
          <div className={styles.inputWrapper}>
            <FormInput
              label="장소 검색"
              list="address-input"
              value={searchKeyword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchKeyword(e.currentTarget.value)
              }
            />
            {addressData && (
              <ul id="address-input" className={styles.list}>
                {addressData.map((address) => {
                  const fullAddress =
                    address.newAddressList.newAddress[0].fullAddressRoad;
                  const addressName = address.name;
                  const { noorLat: lat, noorLon: lon } = address;
                  return (
                    <li
                      role="option"
                      aria-selected={false}
                      className={styles.listItem}
                      key={address.pkey}
                      value={`${fullAddress} ${addressName}`}
                      data-lat={lat}
                      data-lon={lon}
                      onClick={onClickAddressListItem}
                      onKeyDown={onClickAddressListItem}
                    >
                      <span className={sansBold14}>{addressName}</span>
                      <span className={sansRegular12}>{fullAddress}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div id="map" className={styles.map} ref={mapRef} />
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            type="button"
            theme="primary"
            size="medium"
            shape="line"
            onClick={closeModal}
            fullWidth
          >
            취소
          </Button>
          <Button
            type="button"
            theme="primary"
            size="medium"
            shape="fill"
            fullWidth
            onClick={onClickConfirm}
          >
            확인
          </Button>
        </div>
      </div>
    </dialog>
  );
}
