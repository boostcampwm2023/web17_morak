import { RouterProvider } from 'react-router-dom';

import { useRouter } from '@/hooks';
import '@/styles/reset.css';

function App() {
  const router = useRouter();

  return <RouterProvider router={router} />;
}

export default App;
