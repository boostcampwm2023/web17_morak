import { atom, useAtom } from 'jotai';

import { UserInfo } from '@/types';

const userStore = atom<UserInfo | null>(null);
export const useUserAtom = () => useAtom(userStore);
