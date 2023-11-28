import { useEffect } from 'react';

import * as styles from './index.css';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Tmapv3: any;
  }
}

type MapProps = {
  onClickMarker: () => void;
};

export function Map({ onClickMarker }: MapProps) {
  const { Tmapv3 } = window;

  useEffect(() => {
    const mapContent = new Tmapv3.Map('map', {
      center: new Tmapv3.LatLng(37.566535, 126.9779692),
      zoom: 14,
    });
    mapContent.setZoomLimit(7, 16);

    const marker = new Tmapv3.Marker({
      position: new Tmapv3.LatLng(37.566535, 126.9779692),
      icon: '/public/assets/icons/pin.svg',
      map: mapContent,
    });
    marker.on('Click', onClickMarker);

    return () => {
      mapContent.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={styles.container} id="map" />;
}
