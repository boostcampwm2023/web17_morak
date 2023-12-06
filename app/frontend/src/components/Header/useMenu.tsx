import { ReactComponent as Profile } from '@/assets/icons/profile.svg';

import * as styles from './index.css';

export const useMenu = () => {
  const SIDE_MENU = [
    { pathname: 'mogaco', value: 'mogaco' },
    { pathname: 'calendar', value: 'calendar' },
    { pathname: 'map', value: 'map' },
    {
      pathname: 'profile',
      value: (
        <Profile width={24} height={24} className={styles.profileButton} />
      ),
    },
  ];

  return { SIDE_MENU };
};
