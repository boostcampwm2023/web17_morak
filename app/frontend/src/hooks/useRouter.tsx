import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { Main, Auth } from '@/pages';

export const useRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Main /> },
        {
          path: 'mogaco',
          element: <>모각코</>,
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
        {
          path: 'auth',
          element: <Auth />,
        },
      ],
    },
  ]);
