import React from 'react';
import { CookiesProvider } from 'react-cookie';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

import App from './App';

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return undefined;
  }

  const { worker } = await import('./mocks/browser');

  return worker.start();
}

const queryClient = new QueryClient();

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </CookiesProvider>
    </React.StrictMode>,
  );
});
