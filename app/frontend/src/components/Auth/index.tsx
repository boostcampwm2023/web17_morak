import { ReactNode, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetLoginBasedMyInfoQuery } from '@/queries/hooks';

type AuthProps = {
  children: ReactNode;
};

export function AuthRequired({ children }: AuthProps) {
  const {
    data: userInfo,
    isLoading,
    isSuccess,
  } = useGetLoginBasedMyInfoQuery();

  const isLogin = !isLoading && isSuccess && userInfo;

  const navigate = useNavigate();
  const redirectToMain = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (!isLogin) {
      redirectToMain();
    }
  }, [isLogin, redirectToMain]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
