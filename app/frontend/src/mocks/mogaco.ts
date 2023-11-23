// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { Member, Mogaco } from '@/types';

import { memberList } from './members';

const mogacoList: Mogaco[] = [
  {
    id: '1',
    groupId: 1,
    title: '인천역 모각코',
    contents: '인천에서 같이 모각코 하실 분을 모십니다.',
    date: '2023-11-22T12:00:00.000Z',
    maxHumanCount: 5,
    address: '서울 관악구 어디길 어디로 뭐시기카페',
    status: '모집 중' as const,
    member: memberList[0],
  },
  {
    id: '2',
    groupId: 1,
    title: '이수역 모각코',
    contents: '이수역 모각코 하실 분 구합니다!',
    date: '2023-11-22T12:00:00.000Z',
    maxHumanCount: 5,
    address: '주소주소주소주소주소',
    status: '모집 중' as const,
    member: memberList[1],
  },
  {
    id: '3',
    groupId: 1,
    title: '종각역 모각코',
    contents: '종각역에서 모각코 하실 분 구해요',
    date: '2023-10-11T12:00:00.000Z',
    maxHumanCount: 5,
    address: '주소주소주소주소주소',
    status: '모집 중' as const,
    member: memberList[2],
  },
  {
    id: '4',
    groupId: 1,
    title: '사당역 모각코',
    contents: '사당역 크레이저 커피로 오세요~',
    date: '2023-11-22T12:00:00.000Z',
    maxHumanCount: 5,
    address: '주소주소주소주소주소',
    status: '모집 중' as const,
    member: memberList[1],
  },
];

const participantsList: Member[][] = [
  [memberList[0], memberList[1], memberList[2]],
  [memberList[1], memberList[2]],
  [memberList[0], memberList[2]],
  [memberList[0], memberList[1]],
];

export const mogacoAPIHandlers = [
  http.get('/mogaco', () => HttpResponse.json<Mogaco[]>(mogacoList)),
  http.post('/mogaco', () => HttpResponse.json(null, { status: 200 })),
  http.delete('/mogaco/:id', () => HttpResponse.json(null, { status: 200 })),
  http.get('/mogaco/:id', ({ params: { id } }) =>
    HttpResponse.json<Mogaco>(mogacoList[Number(id) - 1]),
  ),
  http.get('/mogaco/:id/participants', ({ params: { id } }) =>
    HttpResponse.json<Member[]>(participantsList[Number(id) - 1]),
  ),
  http.post('/mogaco/:id/join', ({ params: { id } }) => {
    participantsList[Number(id) - 1] = [
      ...participantsList[Number(id) - 1],
      memberList[0],
    ];
    return HttpResponse.json(null, { status: 200 });
  }),
  http.delete('/mogaco/:id/join', ({ params: { id } }) => {
    participantsList[Number(id) - 1] = participantsList[Number(id) - 1].filter(
      (participant) => participant.providerId !== memberList[0].providerId,
    );
    return HttpResponse.json(null, { status: 200 });
  }),
];
