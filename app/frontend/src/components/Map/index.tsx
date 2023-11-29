import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/queries';

import * as styles from './index.css';

type MarkerProps = { id: string };

type MapProps = {
  onClickMarker: ({ id }: MarkerProps) => void;
};

export function Map({ onClickMarker }: MapProps) {
  const { Tmapv3 } = window;
  const { data: mogacoList } = useQuery(queryKeys.mogaco.list());

  useEffect(() => {
    const mapContent = new Tmapv3.Map('map', {
      center: new Tmapv3.LatLng(37.566535, 126.9779692),
      zoom: 14,
    });
    mapContent.setZoomLimit(7, 16);

    mogacoList?.forEach((mogaco) => {
      const { coord, id } = mogaco;
      const [lat, lon] = coord.split(',');
      const marker = new Tmapv3.Marker({
        position: new Tmapv3.LatLng(Number(lat), Number(lon)),
        icon: '/public/assets/icons/pin.svg',
        map: mapContent,
      });
      marker.id = id;
      marker.on('Click', onClickMarker);
    });

    return () => {
      mapContent.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mogacoList]);

  return <div className={styles.container} id="map" />;
}
