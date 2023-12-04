import {
  RequestCreateMogacoDto,
  ResponseMogacoDto,
  ResponseMogacoWithMemberDto,
} from '@morak/apitype';
// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

const mogacoList: ResponseMogacoDto[] = [
  {
    id: '1',
    groupId: '1',
    title: '인천역 모각코 ',
    contents: '모각코 하실 분 구해요~!!',
    date: new Date('2023-11-29T08:40:00.000Z'),
    maxHumanCount: 15,
    address: '서울특별시 어디구 어디동 12',
    latitude: 37.4764,
    longitude: 126.617,
    status: '모집 중',
    createdAt: new Date('2023-11-25T10:21:35.716Z'),
    updatedAt: new Date('2023-11-25T10:21:35.716Z'),
    deletedAt: null,
    group: {
      id: '1',
      title: '부스트캠프 웹・모바일 8기',
    },
  },
  {
    id: '2',
    groupId: '1',
    title: '이수역 모각코 ',
    contents: '모각코 하실 분 구해요~!!',
    date: new Date('2023-11-29T08:40:00.000Z'),
    maxHumanCount: 15,
    address: '서울특별시 어디구 어디동 12',
    latitude: 37.4868,
    longitude: 126.9822,
    status: '모집 중',
    createdAt: new Date('2023-11-25T10:21:35.716Z'),
    updatedAt: new Date('2023-11-25T10:21:35.716Z'),
    deletedAt: null,
    group: {
      id: '1',
      title: '부스트캠프 웹・모바일 8기',
    },
  },
  {
    id: '3',
    groupId: '1',
    title: '종각역 모각코 ',
    contents: '모각코 하실 분 구해요~!!',
    date: new Date('2023-11-29T08:40:00.000Z'),
    maxHumanCount: 15,
    address: '서울특별시 어디구 어디동 12',
    latitude: 37.5702,
    longitude: 126.9831,
    status: '모집 중',
    createdAt: new Date('2023-11-25T10:21:35.716Z'),
    updatedAt: new Date('2023-11-25T10:21:35.716Z'),
    deletedAt: null,
    group: {
      id: '1',
      title: '부스트캠프 웹・모바일 8기',
    },
  },
  {
    id: '4',
    groupId: '1',
    title: '사당역 모각코 ',
    contents: '모각코 하실 분 구해요~!!',
    date: new Date('2023-11-29T08:40:00.000Z'),
    maxHumanCount: 15,
    address: '서울특별시 어디구 어디동 12',
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
];

const mogacoWithMemberList: ResponseMogacoWithMemberDto[] = [
  {
    id: '1',
    groupTitle: '부스트캠프 웹모바일 8기',
    title: '인천역 모각코 ',
    contents: '모각코 하실 분 구해요~!!',
    date: new Date('2023-11-29T08:40:00.000Z'),
    maxHumanCount: 15,
    address: '서울특별시 어디구 어디동 12',
    latitude: 37.4764,
    longitude: 126.617,
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
  {
    id: '2',
    groupTitle: '부스트캠프 웹모바일 8기',
    title: '이수역 모각코 ',
    contents: '모각코 하실 분 구해요~!!',
    date: new Date('2023-11-29T08:40:00.000Z'),
    maxHumanCount: 15,
    address: '서울특별시 어디구 어디동 12',
    latitude: 37.4868,
    longitude: 126.9822,
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
  {
    id: '3',
    groupTitle: '부스트캠프 웹모바일 8기',
    title: '종각역 모각코 ',
    contents: '모각코 하실 분 구해요~!!',
    date: new Date('2023-11-29T08:40:00.000Z'),
    maxHumanCount: 15,
    address: '서울특별시 어디구 어디동 12',
    latitude: 37.5702,
    longitude: 126.9831,
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
  {
    id: '4',
    groupTitle: '부스트캠프 웹모바일 8기',
    title: '사당역 모각코 ',
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
];

export const mogacoAPIHandlers = [
  http.get('/posts', () => HttpResponse.json<ResponseMogacoDto[]>(mogacoList)),
  http.post<never, RequestCreateMogacoDto>('/posts', async () =>
    HttpResponse.json(null, { status: 201 }),
  ),
  http.patch<{ id: string }, RequestCreateMogacoDto>('/posts/:id', async () =>
    HttpResponse.json(null, { status: 200 }),
  ),
  http.get('/posts/:id', ({ params: { id } }) =>
    HttpResponse.json<ResponseMogacoWithMemberDto>(
      mogacoWithMemberList.find((mogaco) => mogaco.id === id),
    ),
  ),
  http.delete('/posts/:id', () => HttpResponse.json(null, { status: 200 })),
  http.post('/posts/:id/join', () => HttpResponse.json(null, { status: 200 })),
  http.delete('/posts/:id/join', () => HttpResponse.json({ status: 200 })),
];
