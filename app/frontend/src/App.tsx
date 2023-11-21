import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import { Header } from '@/components';
import '@/styles/reset.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
