import React from 'react';

import ReactDOM from 'react-dom/client';

import { enableMocking } from '@/utils';

import App from './App';

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
