import { useEffect, useRef, useState } from 'react';

import { RequestCreateMogacoDto } from '@morak/apitype';
import { useQuery } from '@tanstack/react-query';

import { Button, Input } from '@/components';
import { queryKeys } from '@/queries';
import { useModalAtom } from '@/stores';
import { sansBold14, sansRegular12, sansRegular14 } from '@/styles/font.css';

import * as styles from './index.css';
import { useMap } from './useMap';

type MapModalProps = {
  saveAddress: ({ address }: Pick<RequestCreateMogacoDto, 'address'>) => void;
};

type Coord = {
  latitude: number | null;
  longitude: number | null;
};

export function MapModal({ saveAddress }: MapModalProps) {
  const [open, setOpen] = useModalAtom();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [coord, setCoord] = useState<Coord>({
    latitude: null,
    longitude: null,
  });
  const mapRef = useRef<HTMLDivElement>(null);
  const { updateMarker } = useMap(mapRef);

  useEffect(() => {
    updateMarker(coord);
  }, [coord, updateMarker]);

  const { data: tmapResponse } = useQuery({
    ...queryKeys.tmap.searchAddress({
      searchKeyword,
    }),
    enabled: !!searchKeyword,
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
    saveAddress({ address: selectedAddress });
    closeModal();
  };

  const onClickAddressListItem = <
    Event extends React.MouseEvent | React.KeyboardEvent,
  >(
    e: Event,
  ) => {
    setSelectedAddress(e.currentTarget.getAttribute('value') || '');
    const coordinate = {
      latitude: Number(e.currentTarget.getAttribute('data-lat')),
      longitude: Number(e.currentTarget.getAttribute('data-lon')),
    };

    setCoord(coordinate);
  };

  return (
    <dialog className={styles.container} open={open}>
      <form method="dialog" className={styles.form}>
        <div className={styles.currentAddress}>
          <span className={sansRegular14}>선택한 주소: </span>
          <span className={sansBold14}>{selectedAddress}</span>
        </div>
        <div className={styles.addressWrapper}>
          <div className={styles.inputWrapper}>
            <Input
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
      </form>
    </dialog>
  );
}
