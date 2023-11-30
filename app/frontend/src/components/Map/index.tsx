import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/queries';

import * as styles from './index.css';

type MarkerProps = { id: string };

type MapProps = {
  onClickMarker: ({ id }: MarkerProps) => void;
};

export function Map({ onClickMarker }: MapProps) {
  const { Tmapv2 } = window;
  const { data: mogacoList } = useQuery(queryKeys.mogaco.list());

  useEffect(() => {
    const mapContent = new Tmapv2.Map('map', {
      center: new Tmapv2.LatLng(37.566535, 126.9779692),
      zoom: 16,
    });
    mapContent.setZoomLimit(7, 17);

    mogacoList?.forEach((mogaco) => {
      const { id, latitude, longitude } = mogaco;
      if (latitude && longitude) {
        const position = new Tmapv2.LatLng(latitude, longitude);
        const marker = new Tmapv2.Marker({
          position,
          icon: '/public/assets/icons/pin.svg',
          map: mapContent,
        });
        marker.id = id;
        marker.addListener('click', () => {
          onClickMarker({ id });
          mapContent.setCenter(position);
          mapContent.setZoom(17);
        });
      }
    });

    return () => {
      mapContent.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mogacoList]);

  return <div className={styles.container} id="map" />;
}
