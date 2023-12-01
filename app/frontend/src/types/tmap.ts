export type LatLng = {
  _lat: number;
  _lng: number;
};

export type NewAddress = {
  centerLat: string;
  centerLon: string;
  frontLat: string;
  frontLon: string;
  fullAddressRoad: string;
};

export type NewAddressList = {
  newAddress: NewAddress[];
};

export type Poi = {
  newAddressList: NewAddressList;
  id: string;
  pkey: string;
  name: string;
  noorLat: string;
  noorLon: string;
};

export type Pois = {
  poi: Poi[];
};

export type SearchPoiInfo = {
  totalCount: string;
  count: string;
  page: string;
  pois: Pois;
};

export type TMap = {
  setCenter: (latLng: TMapLatLng) => void;
  setZoomLimit: (minZoom: number, maxZoom: number) => void;
  destroy: () => void;
  addListener: (
    eventType: EventType,
    listener: (event: TMapEvent) => void,
  ) => void;
};
type EventType = 'click';
export type TMapEvent = {
  latLng: TMapLatLng;
};
export type TMapLatLng = {
  lat: () => number;
  lng: () => number;
};

export type TMapMarker = {
  setMap: (map: TMap | null) => void;
  getPosition: () => TMapLatLng;
  setPosition: (latLng: TMapLatLng) => void;
};
export type TMapSize = {
  _width: number;
  _height: number;
};
export type TmapAddressInfo = {
  fullAddress: string;
};
export type TMapSize = {
  _width: number;
  _height: number;
};
export type TmapResponse = {
  searchPoiInfo: SearchPoiInfo;
};
export type TmapReverseGeocodingResponse = {
  addressInfo: TmapAddressInfo;
};
