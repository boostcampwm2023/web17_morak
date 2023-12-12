import { ReactNode, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetLoginBasedMyInfoQuery } from '@/queries/hooks';

type AuthProps = {
  children: ReactNode;
};

export function AuthRequired({ children }: AuthProps) {
  const { isLoading, isLogin } = useGetLoginBasedMyInfoQuery();

  const navigate = useNavigate();
  const redirectToMain = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (!isLoading && !isLogin) {
      redirectToMain();
    }
  }, [isLogin, isLoading, redirectToMain]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
