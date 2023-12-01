import { useCallback, useEffect, useState } from 'react';

import { Marker } from '@/components/Map/Marker';
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
      center: new Tmapv2.LatLng(37.566535, 126.9779692),
      zoom: 14,
    });

    map.setZoomLimit(7, 16);
    setMapInstance(map);
  }, [mapRef, mapInstance]);

  const updateMarker = useCallback(
    (coord: { latitude: number | null; longitude: number | null }) => {
      const { latitude, longitude } = coord;
      if (!(latitude && longitude) || !mapInstance) {
        return;
      }

      if (currentMarker) {
        const { _lat: prevLatitude, _lng: prevLongitude } =
          currentMarker.getPosition();
        if (prevLatitude === latitude && prevLongitude === longitude) {
          return;
        }
      }

      currentMarker?.setMap(null);
      const position = new Tmapv2.LatLng(latitude, longitude);
      const marker = Marker({
        mapContent: mapInstance,
        latitude,
        longitude,
        theme: 'green',
      });
      setCurrentMarker(marker);
      mapInstance?.setCenter(position);
    },
    [mapInstance, currentMarker],
  );

  return { mapInstance, updateMarker };
};
