import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { Main, Mogaco, Detail } from '@/pages';

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
          path: 'mogaco/:id',
          element: <Detail />,
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
