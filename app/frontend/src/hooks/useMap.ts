import { useCallback, useEffect, useState } from 'react';

import { Marker } from '@/components/Map/Marker';
import {
  DEFAULT_ZOOM_LEVEL,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
} from '@/constants';
import { TMap, TMapMarker } from '@/types';

const { Tmapv2 } = window;

export const useMap = (mapRef: React.RefObject<HTMLDivElement>) => {
  const [mapInstance, setMapInstance] = useState<TMap | null>(null);
  const [currentMarker, setCurrentMarker] = useState<TMapMarker | null>(null);

  useEffect(() => {
    if (mapRef.current?.firstChild || mapInstance) {
      return;
    }

    const map = new Tmapv2.Map('map', {
      zoom: DEFAULT_ZOOM_LEVEL,
      zoomControl: false,
    });

    map.setZoomLimit(MIN_ZOOM_LEVEL, MAX_ZOOM_LEVEL);
    setMapInstance(map);
  }, [mapRef, mapInstance]);

  const updateMarker = useCallback(
    (
      coord: { latitude: number | null; longitude: number | null },
      theme: 'green' | 'red',
    ) => {
      const { latitude, longitude } = coord;
      if (!(latitude && longitude) || !mapInstance) {
        return;
      }

      if (currentMarker) {
        const currMarker = currentMarker.getPosition();
        const prevLatitude = currMarker.lat();
        const prevLongitude = currMarker.lng();
        if (prevLatitude === latitude && prevLongitude === longitude) {
          return;
        }
      }

      currentMarker?.setMap(mapInstance);
      const position = new Tmapv2.LatLng(latitude, longitude);
      const marker = Marker({
        mapContent: mapInstance,
        position,
        theme,
      });
      setCurrentMarker(marker);
      mapInstance?.setCenter(position);
    },
    [mapInstance, currentMarker],
  );

  return { mapInstance, updateMarker, currentMarker };
};
