// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

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
];
