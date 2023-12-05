import { ReactNode, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCookies } from '@/utils';

type AuthProps = {
  children: ReactNode;
};

export function AuthRequired({ children }: AuthProps) {
  const accessToken = getCookies('access_token');

  const navigate = useNavigate();
  const redirectToMain = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (!accessToken) {
      redirectToMain();
    }
  }, [accessToken, redirectToMain]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
