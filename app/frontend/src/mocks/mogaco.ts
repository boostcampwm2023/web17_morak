// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { Mogaco, MogacoPostRequest } from '@/types';

import { memberList } from './members';

let mogacoList: Mogaco[] = [
  {
    id: '1',
    groupId: '1',
    title: '인천역 모각코',
    contents: '인천에서 같이 모각코 하실 분을 모십니다.',
    date: '2023-11-22T12:00:00.000Z',
    maxHumanCount: 5,
    address: '서울 관악구 어디길 어디로 뭐시기카페',
    coord: '37.4764, 126.617',
    status: '모집 중' as const,
    member: memberList[0],
    participants: [memberList[0], memberList[1], memberList[2]],
    group: { id: '1', title: '부스트캠프 웹·모바일 8기' },
  },
  {
    id: '2',
    groupId: '1',
    title: '이수역 모각코',
    contents: '이수역 모각코 하실 분 구합니다!',
    date: '2023-11-22T12:00:00.000Z',
    maxHumanCount: 5,
    address: '주소주소주소주소주소',
    coord: '37.4868, 126.9822',
    status: '모집 중' as const,
    member: memberList[2],
    participants: [memberList[0], memberList[2]],
    group: { id: '1', title: '부스트캠프 웹·모바일 8기' },
  },
  {
    id: '3',
    groupId: '1',
    title: '종각역 모각코',
    contents: '종각역에서 모각코 하실 분 구해요',
    date: '2023-10-11T12:00:00.000Z',
    maxHumanCount: 2,
    address: '주소주소주소주소주소',
    coord: '37.5702, 126.9831',
    status: '모집 중' as const,
    member: memberList[2],
    participants: [memberList[1], memberList[2]],
    group: { id: '1', title: '부스트캠프 웹·모바일 8기' },
  },
  {
    id: '4',
    groupId: '1',
    title: '사당역 모각코',
    contents: '사당역 크레이저 커피로 오세요~',
    date: '2023-11-22T12:00:00.000Z',
    maxHumanCount: 2,
    address: '주소주소주소주소주소',
    coord: '37.4766, 126.9817',
    status: '모집 중' as const,
    member: memberList[1],
    participants: [memberList[0], memberList[1]],
    group: { id: '1', title: '부스트캠프 웹·모바일 8기' },
  },
];

export const mogacoAPIHandlers = [
  http.get('/mogaco', ({ request }) => {
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);
    const date = params.get('date');
    if (date) {
      const filteredMogacoList = mogacoList.filter((mogaco) =>
        mogaco.date.startsWith(date),
      );
      return HttpResponse.json<Mogaco[]>(filteredMogacoList);
    }
    return HttpResponse.json<Mogaco[]>(mogacoList);
  }),
  http.post<never, MogacoPostRequest>('/mogaco', async ({ request }) => {
    const body = await request.json();
    const postId = String(Number(mogacoList[mogacoList.length - 1].id) + 1);
    const newPost = {
      ...body,
      id: postId,
      member: memberList[0],
      participants: [memberList[0]],
      group: { id: '1', title: '부스트캠프 웹·모바일 8기' },
    };
    mogacoList.push(newPost);
    return HttpResponse.json(newPost, { status: 201 });
  }),
  http.patch<{ id: string }, MogacoPostRequest>(
    '/mogaco/:id',
    async ({ params: { id }, request }) => {
      const body = await request.json();
      const editedPost = {
        ...body,
        id,
        member: memberList[0],
        participants: [memberList[0]],
        group: { id: '1', title: '부스트캠프 웹·모바일 8기' },
      };
      const targetIndex = mogacoList.findIndex((mogaco) => mogaco.id === id);

      if (targetIndex === undefined) {
        return HttpResponse.json(null, { status: 404 });
      }

      mogacoList[targetIndex] = editedPost;
      return HttpResponse.json(editedPost, { status: 200 });
    },
  ),
  http.get('/mogaco/:id', ({ params: { id } }) =>
    HttpResponse.json<Mogaco>(mogacoList.find((mogaco) => mogaco.id === id)),
  ),
  http.delete('/mogaco/:id', ({ params: { id } }) => {
    mogacoList = mogacoList.filter((mogaco) => mogaco.id !== id);
    return HttpResponse.json({ status: 204 });
  }),
  http.post('/mogaco/:id/join', ({ params: { id } }) => {
    const target = mogacoList.find((item) => item.id === id);
    if (!target) {
      return HttpResponse.json(null, { status: 404 });
    }

    target.participants = [...target.participants, memberList[0]];
    return HttpResponse.json(null, { status: 200 });
  }),
  http.delete('/mogaco/:id/join', ({ params: { id } }) => {
    const target = mogacoList.find((item) => item.id === id);
    if (!target) {
      return HttpResponse.json({ status: 404 });
    }

    target.participants = target.participants.filter(
      (item) => item.providerId !== memberList[0].providerId,
    );
    return HttpResponse.json({ status: 200 });
  }),
];
