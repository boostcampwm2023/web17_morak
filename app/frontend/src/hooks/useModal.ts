import { ReactNode } from 'react';

import { useAtom } from 'jotai';

import { currentModalAtom, modalOpenedAtom } from '@/stores';

export const useModal = () => {
  const [, setOpen] = useAtom(modalOpenedAtom);
  const [, setCurrentModal] = useAtom(currentModalAtom);

  const openModal = (modal: ReactNode) => {
    setCurrentModal(modal);
    setOpen(true);
  };

  return { openModal };
};
