import { useEffect, useRef, useState } from 'react';

import { RequestCreateMogacoDto } from '@morak/apitype';
import { useQuery } from '@tanstack/react-query';

import { Button, Input } from '@/components';
import { queryKeys } from '@/queries';
import { useModalAtom } from '@/stores';
import { sansBold14, sansRegular12, sansRegular14 } from '@/styles/font.css';
import { TMap, TMapMarker } from '@/types';

import * as styles from './index.css';

type MapModalProps = {
  saveAddress: ({ address }: Pick<RequestCreateMogacoDto, 'address'>) => void;
};
const { Tmapv2 } = window;
export function MapModal({ saveAddress }: MapModalProps) {
  const [open, setOpen] = useModalAtom();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [mapInstance, setMapInstance] = useState<TMap | null>(null);
  const [currentMarker, setCurrentMarker] = useState<TMapMarker | null>(null);
  const [coord, setCoord] = useState<{
    lat: number | null;
    lon: number | null;
  }>({
    lat: null,
    lon: null,
  });
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
    if (mapRef.current?.firstChild) {
      return;
    }

    const map = new Tmapv2.Map('map', {
      center: new Tmapv2.LatLng(37.566535, 126.9779692),
      zoom: 14,
    });

    map.setZoomLimit(7, 16);
    setMapInstance(map);
  }, [mapRef]);

  const onClickAddressListItem = <
    Event extends React.MouseEvent | React.KeyboardEvent,
  >(
    e: Event,
  ) => {
    setSelectedAddress(e.currentTarget.getAttribute('value') || '');
    const coordinate = {
      lat: Number(e.currentTarget.getAttribute('data-lat')),
      lon: Number(e.currentTarget.getAttribute('data-lon')),
    };

    setCoord(coordinate);
  };

  useEffect(() => {
    if (!(coord.lat && coord.lon)) {
      return;
    }

    currentMarker?.setMap(null);
    const position = new Tmapv2.LatLng(coord.lat, coord.lon);
    const marker = new Tmapv2.Marker({
      position,
      map: mapInstance,
    });
    setCurrentMarker(marker);
    mapInstance?.setCenter(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coord, mapInstance]);

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
