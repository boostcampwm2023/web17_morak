import axios from 'axios';

import { TMAP_API_KEY } from '@/constants';
import { TmapResponse } from '@/types';

export const tmap = {
  endPoint: {
    pois: 'https://apis.openapi.sk.com/tmap/pois',
  },

  searchAddress: async ({ searchKeyword }: { searchKeyword: string }) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        appKey: TMAP_API_KEY,
      },
    };
    const searchOptions = {
      version: '1',
      searchKeyword,
      searchType: 'all',
      searchtypCd: 'A', // 검색 결과 정렬 정확도순
      page: '1',
      count: '20',
    };
    const queryString = new URLSearchParams(searchOptions).toString();

    const { data } = await axios.get<TmapResponse>(
      `${tmap.endPoint.pois}?${queryString}`,
      options,
    );
    return data;
  },
};
