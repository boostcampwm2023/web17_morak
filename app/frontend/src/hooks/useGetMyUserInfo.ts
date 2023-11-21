import { useEffect } from 'react';

import { getMyUserInfo } from '@/services';
import { useUserAtom } from '@/stores';
import { getCookies } from '@/utils';

export const useSetUserInfo = () => {
  const [user, setUser] = useUserAtom();

  useEffect(() => {
    const setUserInfo = async () => {
      try {
        const accessToken = getCookies('access_token');
        if (!accessToken) {
          return false;
        }

        const userInfo = await getMyUserInfo();

        if (userInfo) {
          setUser({ ...userInfo });
        }
      } catch (error) {
        // console.error('Failed to decode access token:', error);
      }
      return true;
    };

    if (!user) {
      setUserInfo();
    }
  }, [user, setUser]);
};
