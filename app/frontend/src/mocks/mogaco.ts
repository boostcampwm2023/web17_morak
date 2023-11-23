// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { Mogaco } from '@/types';

export const mogacoAPIHandlers = [
  http.get('/mogaco', () =>
    HttpResponse.json([
      {
        id: '1',
        groupId: '12314',
        memberId: '1',
        title: '사당역 모각코',
        contents:
          '사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 ',
        date: '2023-11-22T12:00:00.000Z',
        participantList: [
          {
            id: '123',
            nickname: 'Rimi',
            profile:
              'https://lh3.googleusercontent.com/ogw/AKPQZvwTnGmjh0sydCnI53wZMYLcKf-KZJ7Z9MaLg1ZVLQ=s64-c-mo',
          },
          {
            id: '123',
            nickname: 'Rimi',
            profile:
              'https://lh3.googleusercontent.com/ogw/AKPQZvwTnGmjh0sydCnI53wZMYLcKf-KZJ7Z9MaLg1ZVLQ=s64-c-mo',
          },
        ],
        maxHumanCount: 5,
        address: '서울 관악구 어디길 어디로 뭐시기카페',
        status: '모집 중',
      },
      {
        id: '2',
        groupId: '12314',
        memberId: '1',
        title: '사당역 모각코',
        contents:
          '사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 ',
        date: '2023-11-22T12:00:00.000Z',
        participantList: [],
        maxHumanCount: 5,
        address: '주소주소주소주소주소',
        status: '모집 중',
      },
      {
        id: '3',
        groupId: '12314',
        memberId: '1',
        title: '사당역 모각코',
        contents:
          '사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 ',
        date: '2023-11-22T12:00:00.000Z',
        participantList: [
          {
            id: '123',
            nickname: 'Rimi',
            profile:
              'https://lh3.googleusercontent.com/ogw/AKPQZvwTnGmjh0sydCnI53wZMYLcKf-KZJ7Z9MaLg1ZVLQ=s64-c-mo',
          },
        ],
        maxHumanCount: 5,
        address: '주소주소주소주소주소',
        status: '모집 중',
      },
      {
        id: '4',
        groupId: '12314',
        memberId: '1',
        title: '사당역 모각코',
        contents:
          '사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 사당역 모각코 ',
        date: '2023-11-22T12:00:00.000Z',
        participantList: [],
        maxHumanCount: 5,
        address: '주소주소주소주소주소',
        status: '모집 중',
      },
    ]),
  ),
  http.get('/mogaco/:id', () =>
    HttpResponse.json<Mogaco>({
      id: '1',
      groupId: '1',
      memberId: '1',
      title: '사당역에서 모각코 하실 분~',
      contents:
        '내일 오후 2시 사당역 크레이저 커피에서 같이 모각코 하실 분을 모십니다.',
      date: '2023-11-22 16:22',
      participantList: [
        {
          id: '1',
          nickname: '지승',
          profile: 'https://avatars.githubusercontent.com/u/50646827?v=4',
        },
        {
          id: '2',
          nickname: '지원',
          profile: 'https://avatars.githubusercontent.com/u/110762136?v=4',
        },
        {
          id: '3',
          nickname: '태림',
          profile: 'https://avatars.githubusercontent.com/u/43867711?v=4',
        },
      ],
      maxHumanCount: 5,
      address: '서울 관악구 남현3길 71 크레이저 커피',
      status: '모집 중',
    }),
  ),
];
