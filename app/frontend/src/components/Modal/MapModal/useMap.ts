import { useCallback, useEffect, useState } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { Marker } from '@/components/Map/Marker';
import {
  DEFAULT_ZOOM_LEVEL,
  MAX_ZOOM_LEVEL,
  MIN_ZOOM_LEVEL,
} from '@/constants';
import { queryKeys } from '@/queries';
import { TMap, TMapEvent, TMapLatLng, TMapMarker } from '@/types';

const { Tmapv2 } = window;

export const useMap = (mapRef: React.RefObject<HTMLDivElement>) => {
  const [mapInstance, setMapInstance] = useState<TMap | null>(null);
  const [currentMarker, setCurrentMarker] = useState<TMapMarker | null>(null);
  const [currentCoord, setCurrentCoord] = useState<TMapLatLng | null>(null);

  const coord = {
    latitude: currentCoord?.lat() || 0,
    longitude: currentCoord?.lng() || 0,
  };

  const { data: addressData } = useQuery({
    ...queryKeys.tmap.getAddressFromCoord({
      latitude: coord.latitude,
      longitude: coord.longitude,
    }),
    enabled: coord.latitude !== 0 && coord.longitude !== 0,
    placeholderData: keepPreviousData,
  });
  const currentAddress = addressData?.addressInfo.fullAddress || '';

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
    (tempCoord: {
      latitude: number | undefined;
      longitude: number | undefined;
    }) => {
      const { latitude, longitude } = tempCoord;
      if (!(latitude && longitude) || !mapInstance) {
        return;
      }

      const position = new Tmapv2.LatLng(latitude, longitude);

      setCurrentCoord(position);
      mapInstance?.setCenter(position);
    },
    [mapInstance],
  );

  const setCoord = (currCoord: { latitude: number; longitude: number }) => {
    setCurrentCoord(new Tmapv2.LatLng(currCoord.latitude, currCoord.longitude));
  };

  return {
    mapInstance,
    updateMarker,
    coord,
    setCoord,
    currentAddress,
  };
};
