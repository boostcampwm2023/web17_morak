// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

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
    () =>
      HttpResponse.json({
        providerId: '1',
        email: 'js43og@gmail.com',
        nickname: '지승',
        profilePicture:
          'https://avatars.githubusercontent.com/u/50646827?s=64&v=4',
      }),
  ),
];
