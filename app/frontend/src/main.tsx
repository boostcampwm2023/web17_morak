import React from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="52663669065-94iu5bffjnsdqf8mvej1lvpv9mt0rri9.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
