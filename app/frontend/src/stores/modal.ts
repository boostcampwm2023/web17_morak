import { ReactNode } from 'react';

import { atom, useAtom } from 'jotai';

export const currentModalAtom = atom<ReactNode>(null);
export const modalOpenedAtom = atom<boolean>(false);

export const useModalAtom = () => useAtom(modalOpenedAtom);
