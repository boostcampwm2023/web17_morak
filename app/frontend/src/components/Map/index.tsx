import { useEffect, useRef } from 'react';

import { useQuery } from '@tanstack/react-query';

import { MAX_ZOOM_LEVEL } from '@/constants';
import { useMap } from '@/hooks';
import { queryKeys } from '@/queries';

import * as styles from './index.css';
import { Marker } from './Marker';

const { Tmapv2 } = window;

type MapProps = {
  onClickMarker: (id: string) => void;
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

export function Map({ onClickMarker }: MapProps) {
  const { data: mogacoList } = useQuery(queryKeys.posts.list());
  const mapRef = useRef<HTMLDivElement>(null);
  const { mapInstance, updateMarker, currentMarker } = useMap(mapRef);
  setMyLocation(updateMarker);

  useEffect(() => {
    if (!mapInstance) {
      return;
    }
    currentMarker?.setLabel(`<span class=${styles.label}>현 위치</span>`);

    mogacoList?.forEach((mogaco) => {
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
      }
    });

    return () => {
      mapInstance.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mogacoList]);

  return <div className={styles.container} id="map" ref={mapRef} />;
}
