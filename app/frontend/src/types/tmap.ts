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
  setCenter: (latLng: LatLng) => void;
  setZoomLimit: (minZoom: number, maxZoom: number) => void;
};
export type TMapMarker = {
  setMap: (map: TMap | null) => void;
};
export type TmapResponse = {
  searchPoiInfo: SearchPoiInfo;
};
