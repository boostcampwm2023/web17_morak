import { useEffect, useRef } from 'react';

import { ResponseMogacoDto } from '@morak/apitype';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { MAX_ZOOM_LEVEL } from '@/constants';
import { useMap } from '@/hooks';
import { queryKeys } from '@/queries';

import * as styles from './index.css';
import { Marker } from './Marker';
import { MyLocation } from './MyLocation';

const { Tmapv3 } = window;
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
  labelText: string,
) => void;

const setMyLocation = (makeMarker: UpdateMarker) => {
  const onSuccess = (position: Geolocation) => {
    const { latitude, longitude } = position.coords;
    makeMarker({ latitude, longitude }, 'red', '현 위치');
  };
  navigator.geolocation.getCurrentPosition(onSuccess);
};

export function Map({ onClickMarker, closeSidebar }: MapProps) {
  const { data: mogacoList } = useQuery(queryKeys.mogaco.list());
  const mapRef = useRef<HTMLDivElement>(null);
  const { mapInstance, makeMarker } = useMap(mapRef);
  const onClickMyLocation = () => {
    closeSidebar();
    setMyLocation(makeMarker);
  };

  useEffect(() => {
    onClickMyLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInstance]);

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    mogacoList?.forEach((mogaco: ResponseMogacoDto) => {
      const { id, latitude, longitude } = mogaco;
      if (latitude && longitude) {
        const position = new Tmapv3.LatLng(latitude, longitude);
        const marker = Marker({
          mapContent: mapInstance,
          position,
          theme: 'green',
          labelText: dayjs(mogaco.date).format('MM/DD(ddd) HH:mm'),
        });
        marker.on('Click', () => {
          onClickMarker(id);
          mapInstance.setCenter(position);
          mapInstance.setZoom(MAX_ZOOM_LEVEL);
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mogacoList]);

  return (
    <div className={styles.container}>
      <div className={styles.map} id="map" ref={mapRef} />
      <MyLocation onClick={onClickMyLocation} />
    </div>
  );
}
