import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import { Header } from '@components/index.ts';

import { Auth } from '@pages/Auth';
import { Home } from '@pages/Home';

import '@styles/reset.css';

// import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
