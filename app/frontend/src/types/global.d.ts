import { TMapLatLng, TMap, TMapSize } from './tmap';

declare global {
  interface Window {
    Tmapv2: {
      Map: new (
        element: HTMLElement | string,
        options?: {
          center?: TMapLatLng;
          scaleBar?: boolean;
          width?: string | number;
          height?: string | number;
          zoom?: number;
        },
      ) => TMap;
      LatLng: new (lat, lon) => TMapLatLng;
      Marker: new (options?: {
        map: TMap;
        position: TMapLatLng;
        iconHTML?: string;
        iconSize?: TMapSize;
      }) => TMapMarker;
      Size: new (width: number, height: number) => TMapSize;
    };
  }
}

export {};
