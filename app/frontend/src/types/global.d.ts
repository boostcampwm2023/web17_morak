import { LatLng, TMap } from './tmap';

declare global {
  interface Window {
    Tmapv2: {
      Map: new (
        element: HTMLElement | string,
        options?: {
          center?: LatLng;
          scaleBar?: boolean;
          width?: string | number;
          height?: string | number;
          zoom?: number;
        },
      ) => TMap;
      LatLng: new (lat, lon) => LatLng;
      Marker: new ({ position: LatLng, map: TMap }) => TMapMarker;
    };
  }
}

export {};
