import { useNavigate } from 'react-router-dom';

import { useGetLoginBasedMyInfoQuery } from '@/queries/hooks';

import { useLoginRequireModal } from './useLoginRequireModal';

export const useClickMenu = () => {
  const navigate = useNavigate();
  const { openLoginRequireModal } = useLoginRequireModal();
  const { isLoading, isLogin } = useGetLoginBasedMyInfoQuery();

  const onClickMenu = (path: string) => {
    if (!isLoading && !isLogin) {
      openLoginRequireModal();
    } else {
      navigate(`/${path}`);
    }
  };

  const onEnterMenu = (e: React.KeyboardEvent, path: string) => {
    if (e.key === 'Enter') {
      onClickMenu(path);
    }
  };

  return { onClickMenu, onEnterMenu };
};
