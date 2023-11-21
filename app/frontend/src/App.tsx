import { RouterProvider } from 'react-router-dom';

import { useSetUserInfo, useRouter } from '@/hooks';
import '@/styles/reset.css';

function App() {
  const router = useRouter();
  useSetUserInfo();

  return <RouterProvider router={router} />;
}

export default App;
