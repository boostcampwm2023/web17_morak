import { useCallback, useEffect, useState } from 'react';

import { Marker } from '@/components/Map/Marker';
import {
  DEFAULT_ZOOM_LEVEL,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
} from '@/constants';
import { TMap, TMapEvent, TMapMarker } from '@/types';

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

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    const renderMarker = (e: TMapEvent) => {
      const { latLng } = e;
      const position = new Tmapv2.LatLng(latLng.lat(), latLng.lng());

      if (!currentMarker) {
        const marker = Marker({
          mapContent: mapInstance,
          position,
          theme: 'green',
        });
        setCurrentMarker(marker);
      } else {
        currentMarker.setPosition(position);
      }
    };

    mapInstance.addListener('click', renderMarker);
  }, [mapInstance, currentMarker]);

  const updateMarker = useCallback(
    (coord: { latitude: number | null; longitude: number | null }) => {
      const { latitude, longitude } = coord;
      if (!(latitude && longitude) || !mapInstance) {
        return;
      }

      if (currentMarker) {
        const currMarker = currentMarker.getPosition();
        const changedLatitude = currMarker.lat() !== latitude;
        const changedLongitude = currMarker.lng() !== longitude;
        if (!(changedLatitude || changedLongitude)) {
          return;
        }
      }

      currentMarker?.setMap(null);
      const position = new Tmapv2.LatLng(latitude, longitude);
      const marker = Marker({
        mapContent: mapInstance,
        position,
        theme: 'green',
      });
      setCurrentMarker(marker);
      mapInstance?.setCenter(position);
    },
    [mapInstance, currentMarker],
  );

  return { mapInstance, updateMarker };
};
