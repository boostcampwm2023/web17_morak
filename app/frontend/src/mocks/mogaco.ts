// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { Mogaco, Participant } from '@/types';

import { userList } from './members';

const mogacoList = [
  {
    id: '1',
    groupId: 1,
    memberId: '1',
    title: '인천역 모각코',
    contents: '인천에서 같이 모각코 하실 분을 모십니다.',
    date: '2023-11-22T12:00:00.000Z',
    maxHumanCount: 5,
    address: '서울 관악구 어디길 어디로 뭐시기카페',
    status: '모집 중' as const,
  },
  {
    id: '2',
    groupId: 1,
    memberId: '2',
    title: '이수역 모각코',
    contents: '이수역 모각코 하실 분 구합니다!',
    date: '2023-11-22T12:00:00.000Z',
    maxHumanCount: 5,
    address: '주소주소주소주소주소',
    status: '모집 중' as const,
  },
  {
    id: '3',
    groupId: 1,
    memberId: '3',
    title: '종각역 모각코',
    contents: '종각역에서 모각코 하실 분 구해요',
    date: '2023-10-11T12:00:00.000Z',
    maxHumanCount: 5,
    address: '주소주소주소주소주소',
    status: '모집 중' as const,
  },
  {
    id: '4',
    groupId: 1,
    memberId: '1',
    title: '사당역 모각코',
    contents: '사당역 크레이저 커피로 오세요~',
    date: '2023-11-22T12:00:00.000Z',
    maxHumanCount: 5,
    address: '주소주소주소주소주소',
    status: '모집 중' as const,
  },
];

const participantsList = [
  [userList[0], userList[1], userList[2]],
  [userList[1], userList[2]],
  [userList[0], userList[2]],
  [userList[0], userList[1]],
];

export const mogacoAPIHandlers = [
  http.get('/mogaco', () => HttpResponse.json<Mogaco[]>(mogacoList)),
  http.get('/mogaco/:id', ({ params: { id } }) =>
    HttpResponse.json<Mogaco>(mogacoList[Number(id) - 1]),
  ),
  http.get('/mogaco/:id/participants', ({ params: { id } }) =>
    HttpResponse.json<Participant[]>(participantsList[Number(id) - 1]),
  ),
  http.post('/mogaco', () => HttpResponse.json(null, { status: 200 })),
  http.post('/mogaco/:id/join', ({ params: { id } }) => {
    participantsList[Number(id) - 1] = [
      ...participantsList[Number(id) - 1],
      userList[0],
    ];
    return HttpResponse.json(null, { status: 200 });
  }),
  http.delete('/mogaco/:id/join', ({ params: { id } }) => {
    participantsList[Number(id) - 1] = participantsList[Number(id) - 1].filter(
      (participant) => participant.id !== userList[0].id,
    );
    return HttpResponse.json(null, { status: 200 });
  }),
  http.delete('/mogaco/:id', () => HttpResponse.json(null, { status: 200 })),
];
