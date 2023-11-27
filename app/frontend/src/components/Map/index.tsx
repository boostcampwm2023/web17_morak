import { useEffect } from 'react';

import * as styles from './index.css';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Tmapv3: any;
  }
}

export function Map() {
  const { Tmapv3 } = window;

  useEffect(() => {
    const mapContent = new Tmapv3.Map('map', {
      center: new Tmapv3.LatLng(37.566535, 126.9779692),
      zoom: 14,
    });
    mapContent.setZoomLimit(7, 16);
    return () => {
      mapContent.destroy();
    };
  }, [Tmapv3.LatLng, Tmapv3.Map]);

  return <div className={styles.container} id="map" />;
}
