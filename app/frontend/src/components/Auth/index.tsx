import { ReactNode, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { getMyInfoQuery } from '@/queries/hooks';

type AuthProps = {
  children: ReactNode;
};

export function AuthRequired({ children }: AuthProps) {
  const {
    data: userInfo,
    isLoading,
    isSuccess,
  } = useQuery({
    ...getMyInfoQuery,
    staleTime: 0,
  });

  const navigate = useNavigate();
  const redirectToMain = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (!(!isLoading && isSuccess && userInfo)) {
      redirectToMain();
    }
  }, [userInfo, isLoading, isSuccess, redirectToMain]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
