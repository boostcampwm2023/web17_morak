import { LatLng, TMap, TMapSize } from './tmap';

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
      Marker: new (options?: {
        map: TMap;
        position: LatLng;
        iconHTML?: string;
        iconSize?: TMapSize;
      }) => TMapMarker;
      Size: new (width: number, height: number) => TMapSize;
    };
  }
}

export {};
