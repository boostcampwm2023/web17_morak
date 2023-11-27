import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import {
  MainPage,
  MogacoPage,
  MogacoDetailPage,
  MogacoPostPage,
} from '@/pages';

export const useRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        {
          path: 'mogaco',
          element: <MogacoPage />,
        },
        {
          path: 'mogaco/:id',
          element: <MogacoDetailPage />,
        },
        { path: 'post', element: <MogacoPostPage /> },
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
