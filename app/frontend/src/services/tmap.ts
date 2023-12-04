import axios from 'axios';

import { TMAP_API_KEY } from '@/constants';
import { TmapResponse, TmapReverseGeocodingResponse } from '@/types';

export const tmap = {
  host: 'https://apis.openapi.sk.com/tmap',
  endPoint: {
    pois: '/pois',
    reverseGeocoding: '/geo/reversegeocoding',
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
      `${tmap.host}${tmap.endPoint.pois}?${queryString}`,
      options,
    );
    return data;
  },

  getAddressFromCoord: async ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        appKey: TMAP_API_KEY,
      },
    };
    const searchOptions = {
      version: '1',
      lat: latitude.toString(),
      lon: longitude.toString(),
      addressType: 'A04', // 새 주소
    };
    const queryString = new URLSearchParams(searchOptions).toString();

    const { data } = await axios.get<TmapReverseGeocodingResponse>(
      `${tmap.host}${tmap.endPoint.reverseGeocoding}?${queryString}`,
      options,
    );
    return data;
  },
};
