import { useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { getMyInfoQuery } from '@/queries/hooks';

import { useLoginRequireModal } from './useLoginRequireModal';

export const useClickMenu = () => {
  const navigate = useNavigate();
  const { openLoginRequireModal } = useLoginRequireModal();

  const {
    data: userInfo,
    isLoading,
    isSuccess,
  } = useQuery({
    ...getMyInfoQuery,
    staleTime: 0,
  });
  const isLogin = !isLoading && isSuccess && userInfo;

  const onClickMenu = (path: string) => {
    if (!isLogin) {
      openLoginRequireModal();
    } else {
      navigate(`/${path}`);
    }
  };

  return { onClickMenu };
};
