import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import {
  MainPage,
  MogacoPage,
  MogacoDetailPage,
  MogacoPostPage,
  Calendar,
  MapLayout,
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
          element: <Calendar />,
        },
        {
          path: 'profile',
          element: <>프로필</>,
        },
      ],
    },
    {
      path: '/map',
      element: <MapLayout />,
    },
  ]);
