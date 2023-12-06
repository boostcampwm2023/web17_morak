import { useEffect, useRef } from 'react';

import { ResponseMogacoDto } from '@morak/apitype';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { MAX_ZOOM_LEVEL } from '@/constants';
import { useMap } from '@/hooks';
import { queryKeys } from '@/queries';
import { reactElementToString } from '@/utils';

import * as styles from './index.css';
import { Marker } from './Marker';
import { MyLocation } from './MyLocation';

const { Tmapv2 } = window;
dayjs.locale('ko');

type MapProps = {
  onClickMarker: (id: string) => void;
  closeSidebar: () => void;
};
type Geolocation = {
  coords: {
    latitude: number;
    longitude: number;
  };
};
type UpdateMarker = (
  coord: {
    latitude: number | null;
    longitude: number | null;
  },
  theme: 'green' | 'red',
) => void;

const setMyLocation = (updateMarker: UpdateMarker) => {
  const onSuccess = (position: Geolocation) => {
    const { latitude, longitude } = position.coords;
    updateMarker({ latitude, longitude }, 'red');
  };
  navigator.geolocation.getCurrentPosition(onSuccess);
};

export function Map({ onClickMarker, closeSidebar }: MapProps) {
  const { data: mogacoList } = useQuery(queryKeys.mogaco.list());
  const mapRef = useRef<HTMLDivElement>(null);
  const { mapInstance, updateMarker, currentMarker } = useMap(mapRef);
  const onClickMyLocation = () => {
    closeSidebar();
    setMyLocation(updateMarker);
  };

  useEffect(() => {
    onClickMyLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance]);

  useEffect(() => {
    if (!mapInstance) {
      return;
    }
    currentMarker?.setLabel(
      reactElementToString(
        <span className={styles.label({ theme: 'red' })}>현 위치</span>,
      ),
    );

    mogacoList?.forEach((mogaco: ResponseMogacoDto) => {
      const { id, latitude, longitude } = mogaco;
      if (latitude && longitude) {
        const position = new Tmapv2.LatLng(latitude, longitude);
        const marker = Marker({
          mapContent: mapInstance,
          position,
          theme: 'green',
        });
        marker.addListener('click', () => {
          onClickMarker(id);
          mapInstance.setCenter(position);
          mapInstance.setZoom(MAX_ZOOM_LEVEL);
        });
        marker.setLabel(
          reactElementToString(
            <span className={styles.label({ theme: 'green' })}>
              {dayjs(mogaco.date).format('MM/DD(ddd) HH:mm')}
            </span>,
          ),
        );
      }
    });
  }, [mogacoList, currentMarker, mapInstance, onClickMarker]);

  return (
    <div className={styles.container}>
      <div className={styles.map} id="map" ref={mapRef} />
      <MyLocation onClick={onClickMyLocation} />
    </div>
  );
}
