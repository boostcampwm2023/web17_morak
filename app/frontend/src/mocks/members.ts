import { ResponseParticipant } from '@morak/apitype';
// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

const memberList: ResponseParticipant[] = [
  {
    id: '1',
    providerId: '1',
    email: '.',
    nickname: '지승',
    profilePicture: 'https://avatars.githubusercontent.com/u/50646827?v=4',
  },
  {
    id: '2',
    providerId: '2',
    email: '.',
    nickname: '지원',
    profilePicture: 'https://avatars.githubusercontent.com/u/110762136?v=4',
  },
  {
    id: '3',
    providerId: '3',
    email: '.',
    nickname: '태림',
    profilePicture: 'https://avatars.githubusercontent.com/u/43867711?v=4',
  },
];

export const memberAPIHandlers = [
  http.get(
    '/member/me',
    // () => HttpResponse.error(),
    () => HttpResponse.json(memberList[0]),
  ),
  http.get(
    '/member/:id',
    // () => HttpResponse.error(),
    ({ params: { id } }) => HttpResponse.json(memberList[Number(id) - 1]),
  ),
];

export { memberList };
