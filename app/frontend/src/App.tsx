import reactLogo from '@assets/react.svg';
import '@styles/reset.css';
import { useState } from 'react';

import { logo, rotateLogo, card, reactTheDocs } from './App.css.ts';
import viteLogo from '../public/vite.svg';

// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
      </div>
      <p className={reactTheDocs}>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
