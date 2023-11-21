import { atom, useAtom } from 'jotai';

import { User } from '@/types';

const userStore = atom<User | null>(null);
export const useUserAtom = () => useAtom(userStore);
