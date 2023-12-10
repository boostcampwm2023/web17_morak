import { createBrowserRouter } from 'react-router-dom';

import { AuthRequired, Layout } from '@/components';
import {
  MainPage,
  MogacoPage,
  MogacoDetailPage,
  MogacoPostPage,
  Calendar,
  MapLayout,
  Groups,
  ProfilePage,
  NotFound,
} from '@/pages';

export const useRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [{ index: true, element: <MainPage /> }],
    },
    {
      path: '/',
      element: (
        <AuthRequired>
          <Layout />
        </AuthRequired>
      ),
      children: [
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
          element: <ProfilePage />,
        },
        {
          path: 'groups',
          element: <Groups />,
        },
      ],
    },
    {
      path: '/map',
      element: (
        <AuthRequired>
          <MapLayout />
        </AuthRequired>
      ),
    },
  ]);
