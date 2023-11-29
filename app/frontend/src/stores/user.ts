import { ResponseParticipant } from '@morak/apitype';
import { atom, useAtom } from 'jotai';

const userStore = atom<ResponseParticipant | null>(null);
export const useUserAtom = () => useAtom(userStore);
