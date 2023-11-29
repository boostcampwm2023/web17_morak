import axios from 'axios';

import { TMAP_API_KEY } from '@/constants';

export const tmap = {
  endPoint: {
    pois: 'https://apis.openapi.sk.com/tmap/pois',
  },

  searchAddress: async (searchKeyword: string) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        appKey: TMAP_API_KEY,
      },
    };
    const searchOptions = {
      version: '1',
      searchKeyword: encodeURI(searchKeyword),
      searchType: 'all',
      searchtypCd: 'A',
      reqCoordType: 'WGS84GEO',
      resCoordType: 'WGS84GEO',
      page: '1',
      count: '20',
      multiPoint: 'N',
      poiGroupYn: 'N',
    };
    const queryString = new URLSearchParams(searchOptions).toString();

    const { data } = await axios.get(
      `${tmap.endPoint.pois}?${queryString}`,
      options,
    );
    return data;
  },
};
