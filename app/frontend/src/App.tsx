import { RouterProvider } from 'react-router-dom';

import { useSetUserInfo, useRouter } from '@/hooks';

function App() {
  const router = useRouter();
  useSetUserInfo();

  return <RouterProvider router={router} />;
}

export default App;
