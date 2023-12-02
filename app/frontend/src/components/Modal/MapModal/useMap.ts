import { useCallback, useEffect, useState } from 'react';

import { Marker } from '@/components/Map/Marker';
import {
  DEFAULT_ZOOM_LEVEL,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
} from '@/constants';
import { TMap, TMapEvent, TMapLatLng, TMapMarker } from '@/types';

const { Tmapv2 } = window;

export const useMap = (mapRef: React.RefObject<HTMLDivElement>) => {
  const [mapInstance, setMapInstance] = useState<TMap | null>(null);
  const [currentMarker, setCurrentMarker] = useState<TMapMarker | null>(null);
  const [currentCoord, setCurrentCoord] = useState<TMapLatLng | null>(null);

  useEffect(() => {
    if (!currentCoord) {
      return;
    }

    const makeMarker = (position: TMapLatLng) => {
      if (!mapInstance) {
        return;
      }

      currentMarker?.setMap(null);

      const marker = Marker({
        mapContent: mapInstance,
        position,
        theme: 'green',
      });

      setCurrentMarker(marker);
    };

    makeMarker(currentCoord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCoord, mapInstance]);

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

      setCurrentCoord(position);
    };

    mapInstance.addListener('click', renderMarker);
  }, [mapInstance, currentCoord]);

  const updateMarker = useCallback(
    (coord: {
      latitude: number | undefined;
      longitude: number | undefined;
    }) => {
      const { latitude, longitude } = coord;
      if (!(latitude && longitude) || !mapInstance) {
        return;
      }

      const position = new Tmapv2.LatLng(latitude, longitude);

      setCurrentCoord(position);
      mapInstance?.setCenter(position);
    },
    [mapInstance],
  );

  const coord = {
    latitude: currentCoord?.lat(),
    longitude: currentCoord?.lng(),
  };

  const setCoord = (currCoord: { latitude: number; longitude: number }) => {
    setCurrentCoord(new Tmapv2.LatLng(currCoord.latitude, currCoord.longitude));
  };

  return { mapInstance, updateMarker, coord, setCoord };
};
