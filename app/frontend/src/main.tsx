import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return undefined;
  }

  const { worker } = await import('./mocks/browser');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
