import { http, HttpResponse } from 'msw';

export const handlers = [
  // member
  http.get('/member/me', () =>
    HttpResponse.json({
      providerId: '1234',
      email: 'ttrrr121@gmail.com',
      nickname: 'RIMI',
      profilePicture: 'https://lh3.googleusercontent.com/ogw/AKPQZvwTnGmjh0sydCnI53wZMYLcKf-KZJ7Z9MaLg1ZVLQ=s64-c-mo',
    }),
  ),
];
