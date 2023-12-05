import { useModal } from '@/hooks';

import { Modal } from '../Modal';

export const useLoginRequireModal = () => {
  const { openModal } = useModal();
  const openLoginRequireModal = () => {
    openModal(<Modal title="로그인이 필요합니다" buttonType="single" />);
  };

  return { openLoginRequireModal };
};
