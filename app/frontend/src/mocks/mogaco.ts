// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { Member, Mogaco, MogacoPostRequest } from '@/types';

import { memberList } from './members';

let mogacoList: Mogaco[] = [
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
    member: memberList[2],
  },
  {
    id: '3',
    groupId: 1,
    title: '종각역 모각코',
    contents: '종각역에서 모각코 하실 분 구해요',
    date: '2023-10-11T12:00:00.000Z',
    maxHumanCount: 2,
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
    maxHumanCount: 2,
    address: '주소주소주소주소주소',
    status: '모집 중' as const,
    member: memberList[1],
  },
];

let participantsList: { id: string; participants: Member[] }[] = [
  { id: '1', participants: [memberList[0], memberList[1], memberList[2]] },
  { id: '2', participants: [memberList[0], memberList[2]] },
  { id: '3', participants: [memberList[1], memberList[2]] },
  { id: '4', participants: [memberList[0], memberList[1]] },
];

export const mogacoAPIHandlers = [
  http.get('/mogaco', () => HttpResponse.json<Mogaco[]>(mogacoList)),
  http.post<never, MogacoPostRequest>('/mogaco', async ({ request }) => {
    const body = await request.json();
    const postId = String(mogacoList[mogacoList.length - 1].id + 1);
    mogacoList.push({
      ...body,
      id: postId,
      member: memberList[0],
    });
    participantsList.push({
      id: postId,
      participants: [memberList[0]],
    });
    return HttpResponse.json(null, { status: 201 });
  }),
  http.get('/mogaco/:id', ({ params: { id } }) =>
    HttpResponse.json<Mogaco>(mogacoList.find((mogaco) => mogaco.id === id)),
  ),
  http.delete('/mogaco/:id', ({ params: { id } }) => {
    mogacoList = mogacoList.filter((mogaco) => mogaco.id !== id);
    participantsList = participantsList.filter(
      (participants) => participants.id !== id,
    );
    return HttpResponse.json({ status: 204 });
  }),
  http.get('/mogaco/:id/participants', ({ params: { id } }) =>
    HttpResponse.json<Member[]>(
      participantsList.find((item) => item.id === id)?.participants,
    ),
  ),
  http.post('/mogaco/:id/join', ({ params: { id } }) => {
    const target = participantsList.find((item) => item.id === id);
    if (!target) {
      return HttpResponse.json(null, { status: 404 });
    }

    target.participants = [...target.participants, memberList[0]];
    return HttpResponse.json(null, { status: 200 });
  }),
  http.delete('/mogaco/:id/join', ({ params: { id } }) => {
    const target = participantsList.find((item) => item.id === id);
    if (!target) {
      return HttpResponse.json({ status: 404 });
    }

    target.participants = target.participants.filter(
      (item) => item.providerId !== memberList[0].providerId,
    );
    return HttpResponse.json({ status: 200 });
  }),
];
