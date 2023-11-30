import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import {
  DEFAULT_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
  MAX_ZOOM_LEVEL,
} from '@/constants';
import { queryKeys } from '@/queries';

import * as styles from './index.css';
import { Marker } from './Marker';

const { Tmapv2 } = window;

type MapProps = {
  onClickMarker: (id: string) => void;
};

export function Map({ onClickMarker }: MapProps) {
  const { data: mogacoList } = useQuery(queryKeys.mogaco.list());

  useEffect(() => {
    const mapContent = new Tmapv2.Map('map', {
      zoom: DEFAULT_ZOOM_LEVEL,
    });
    mapContent.setZoomLimit(MIN_ZOOM_LEVEL, MAX_ZOOM_LEVEL);

    mogacoList?.forEach((mogaco) => {
      const { id, latitude, longitude } = mogaco;
      if (latitude && longitude) {
        const position = new Tmapv2.LatLng(latitude, longitude);
        const marker = Marker({
          mapContent,
          latitude,
          longitude,
          theme: 'green',
        });
        marker.id = id;
        marker.addListener('click', () => {
          onClickMarker(id);
          mapContent.setCenter(position);
          mapContent.setZoom(MAX_ZOOM_LEVEL);
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
