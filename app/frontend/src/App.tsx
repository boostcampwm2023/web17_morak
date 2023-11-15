import reactLogo from '@assets/react.svg';
import { Header } from '@components/index.ts';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import '@styles/reset.css';

// import './App.css';
import { logo, rotateLogo, card, reactTheDocs, themeText } from './App.css.ts';
import viteLogo from '../public/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className={logo} alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className={`${logo} ${rotateLogo}`} alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className={card}>
            <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            <div className={themeText}>안녕하세요, theme이 적용된 텍스트에요.</div>
          </div>
          <p className={reactTheDocs}>Click on the Vite and React logos to learn more</p>
        </>
      ),
    },
    {
      path: '/mogaco',
      element: <Header />,
    },
    {
      path: '/calendar',
      element: <Header />,
    },
    {
      path: '/map',
      element: <Header />,
    },
    {
      path: '/profile',
      element: <Header />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
