// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

const userList = [
  {
    id: '1',
    nickname: '지승',
    profilePicture: 'https://avatars.githubusercontent.com/u/50646827?v=4',
  },
  {
    id: '2',
    nickname: '지원',
    profilePicture: 'https://avatars.githubusercontent.com/u/110762136?v=4',
  },
  {
    id: '3',
    nickname: '태림',
    profilePicture: 'https://avatars.githubusercontent.com/u/43867711?v=4',
  },
];

export const memberAPIHandlers = [
  http.get(
    '/member/me',
    // () => HttpResponse.error(),
    () =>
      HttpResponse.json({
        providerId: '1234',
        email: 'ttrrr121@gmail.com',
        nickname: 'RIMI',
        profilePicture:
          'https://lh3.googleusercontent.com/ogw/AKPQZvwTnGmjh0sydCnI53wZMYLcKf-KZJ7Z9MaLg1ZVLQ=s64-c-mo',
      }),
  ),
  http.get(
    '/member/:id',
    // () => HttpResponse.error(),
    ({ params: { id } }) => HttpResponse.json(userList[Number(id) - 1]),
  ),
];
export { userList };
