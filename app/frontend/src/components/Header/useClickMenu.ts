import { useNavigate } from 'react-router-dom';

import { getCookies } from '@/utils';

import { useLoginRequireModal } from './useLoginRequireModal';

export const useClickMenu = () => {
  const navigate = useNavigate();
  const { openLoginRequireModal } = useLoginRequireModal();
  const isLogin = getCookies('access_token');

  const onClickMenu = (path: string) => {
    if (!isLogin) {
      openLoginRequireModal();
    } else {
      navigate(`/${path}`);
    }
  };

  return { onClickMenu };
};
