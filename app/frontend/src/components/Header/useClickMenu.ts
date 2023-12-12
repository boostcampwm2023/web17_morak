import { useNavigate } from 'react-router-dom';

import { useGetLoginBasedMyInfoQuery } from '@/queries/hooks';

import { useLoginRequireModal } from './useLoginRequireModal';

export const useClickMenu = () => {
  const navigate = useNavigate();
  const { openLoginRequireModal } = useLoginRequireModal();
  const {
    data: userInfo,
    isLoading,
    isSuccess,
  } = useGetLoginBasedMyInfoQuery();

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
