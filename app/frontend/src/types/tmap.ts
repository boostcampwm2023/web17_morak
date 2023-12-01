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

export type TmapResponse = {
  searchPoiInfo: SearchPoiInfo;
};
