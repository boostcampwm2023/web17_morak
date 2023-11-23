import { atom, useAtom } from 'jotai';

import { Member } from '@/types';

const userStore = atom<Member | null>(null);
export const useUserAtom = () => useAtom(userStore);
