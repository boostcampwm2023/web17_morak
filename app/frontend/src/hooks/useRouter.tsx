import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { Main } from '@/pages';
import { Post } from '@/pages/Post';

export const useRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Main /> },
        {
          path: 'mogaco',
          element: <Mogaco />,
        },
        {
          path: 'post',
          element: <Post />,
        },
        {
          path: 'calendar',
          element: <>캘린더</>,
        },
        {
          path: 'map',
          element: <>지도</>,
        },
        {
          path: 'profile',
          element: <>프로필</>,
        },
      ],
    },
  ]);
