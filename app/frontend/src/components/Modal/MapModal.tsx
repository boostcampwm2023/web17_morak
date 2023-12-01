import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { Button, Input } from '@/components';
import { queryKeys } from '@/queries';
import { useModalAtom } from '@/stores';

import * as styles from './MapModal.css';

export function MapModal() {
  const [open, setOpen] = useModalAtom();
  const [searchKeyword, setSearchKeyword] = useState('');
  const mapRef = useRef<HTMLDivElement>(null);
  const { data: tmapResponse } = useQuery({
    ...queryKeys.tmap.searchAddress({
      searchKeyword,
    }),
    enabled: !!searchKeyword,
  });
  const addressData = tmapResponse?.searchPoiInfo?.pois?.poi;

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const { Tmapv2 } = window;
    if (mapRef.current?.firstChild) {
      return;
    }
    const mapContent = new Tmapv2.Map('map', {
      center: new Tmapv2.LatLng(37.566535, 126.9779692),
      zoom: 14,
    });
    mapContent.setZoomLimit(7, 16);
  }, [mapRef]);

  return (
    <dialog className={styles.container} open={open}>
      <form method="dialog" className={styles.form}>
        <div className={styles.inputWrapper}>
          <Input
            list="address-input"
            value={searchKeyword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchKeyword(e.currentTarget.value)
            }
          />
          <datalist id="address-input" className={styles.list}>
            {addressData?.map((address) => {
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
          </datalist>
        </div>
        <div id="map" className={styles.map} ref={mapRef} />
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
            onClick={closeModal}
          >
            확인
          </Button>
        </div>
      </form>
    </dialog>
  );
}
