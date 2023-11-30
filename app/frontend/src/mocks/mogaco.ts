import {
  RequestCreateMogacoDto,
  ResponseMogacoDto,
  ResponseMogacoWithMemberDto,
} from '@morak/apitype';
// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

export const mogacoAPIHandlers = [
  http.get('/mogaco', () =>
    HttpResponse.json<ResponseMogacoDto[]>([
      {
        id: '1',
        groupId: '1',
        title: '사당역 모각코',
        contents: '사당역에서 모각코를 열려고 합니다.',
        date: new Date('2023-11-22T12:00:00Z'),
        maxHumanCount: 5,
        address: '서울특별시 관악구 어디길 22 모락 카페',
        latitude: 37.4766,
        longitude: 126.9817,
        status: '모집 중',
        createdAt: new Date('2023-11-25T10:21:35.716Z'),
        updatedAt: new Date('2023-11-25T10:21:35.716Z'),
        deletedAt: null,
        group: {
          id: '1',
          title: '부스트캠프 웹・모바일 8기',
        },
      },
    ]),
  ),
  http.post<never, RequestCreateMogacoDto>('/mogaco', async () =>
    HttpResponse.json(null, { status: 201 }),
  ),
  http.patch<{ id: string }, RequestCreateMogacoDto>('/mogaco/:id', async () =>
    HttpResponse.json(null, { status: 200 }),
  ),
  http.get('/mogaco/:id', () =>
    HttpResponse.json<ResponseMogacoWithMemberDto>(
      {
        id: '1',
        groupTitle: '부스트캠프 웹모바일 8기',
        title: '서울 어딘가 모각코 ',
        contents: '모각코 하실 분 구해요~!!',
        date: new Date('2023-11-29T08:40:00.000Z'),
        maxHumanCount: 15,
        address: '서울특별시 어디구 어디동 12',
        latitude: 37.4766,
        longitude: 126.9817,
        status: '모집 중',
        member: {
          providerId: '107756461693287933704',
          email: 'ttrrr121@gmail.com',
          nickname: 'RIMI',
          profilePicture:
            'https://lh3.googleusercontent.com/a/ACg8ocIUKQm6-xqA7Rzw7oLHEXJVdQdIAu8tgwmYpqa1x6PdXjw=s96-c',
        },
        participants: [
          {
            id: '1',
            providerId: '107756461693287933704',
            email: 'ttrrr121@gmail.com',
            nickname: 'RIMI',
            profilePicture:
              'https://lh3.googleusercontent.com/a/ACg8ocIUKQm6-xqA7Rzw7oLHEXJVdQdIAu8tgwmYpqa1x6PdXjw=s96-c',
          },
          {
            id: '2',
            providerId: '117187214221556274884',
            email: 'bcwm.morak@gmail.com',
            nickname: 'morak morak',
            profilePicture:
              'https://lh3.googleusercontent.com/a/ACg8ocKej7-OYc7vwz5Xu8Tss37yWKC5vEVMet-1YFh8PcB7Xg=s96-c',
          },
        ],
      },
      { status: 200 },
    ),
  ),
  http.delete('/mogaco/:id', () => HttpResponse.json(null, { status: 200 })),
  http.post('/mogaco/:id/join', () => HttpResponse.json(null, { status: 200 })),
  http.delete('/mogaco/:id/join', () => HttpResponse.json({ status: 200 })),
];
