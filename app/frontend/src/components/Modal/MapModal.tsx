import { useEffect, useRef, useState } from 'react';

import { RequestCreateMogacoDto } from '@morak/apitype';
import { useQuery } from '@tanstack/react-query';

import { Button, Input } from '@/components';
import { queryKeys } from '@/queries';
import { useModalAtom } from '@/stores';
import { sansBold14, sansRegular12, sansRegular14 } from '@/styles/font.css';

import * as styles from './MapModal.css';

type MapModalProps = {
  saveAddress: ({ address }: Pick<RequestCreateMogacoDto, 'address'>) => void;
};
export function MapModal({ saveAddress }: MapModalProps) {
  const [open, setOpen] = useModalAtom();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const mapRef = useRef<HTMLDivElement>(null);
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
        <div className={styles.currentAddress}>
          <span className={sansRegular14}>선택한 주소: </span>
          <span className={sansBold14}>{selectedAddress}</span>
        </div>
        <div className={styles.addressWrapper}>
          <div className={styles.inputWrapper}>
            <Input
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
                  return (
                    <li
                      className={styles.listItem}
                      key={address.pkey}
                      value={`${fullAddress} ${addressName}`}
                      onClick={(e) =>
                        setSelectedAddress(
                          e.currentTarget.getAttribute('value') || '',
                        )
                      }
                      aria-hidden
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
