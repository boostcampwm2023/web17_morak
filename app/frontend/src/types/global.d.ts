import { TMapLatLng, TMap, TMapSize } from './tmap';

declare global {
  interface Window {
    Tmapv3: {
      Map: new (
        element: HTMLElement | string,
        options?: {
          center?: TMapLatLng;
          scaleBar?: boolean;
          width?: string | number;
          height?: string | number;
          zoom?: number;
          zoomControl?: boolean;
        },
      ) => TMap;
      LatLng: new (lat, lon) => TMapLatLng;
      Marker: new (options?: {
        map: TMap;
        position: TMapLatLng;
        iconHTML?: string;
        iconSize?: TMapSize;
        label?: string;
        icon?: string;
      }) => TMapMarker;
      Size: new (width: number, height: number) => TMapSize;
    };
  }
}

export {};
