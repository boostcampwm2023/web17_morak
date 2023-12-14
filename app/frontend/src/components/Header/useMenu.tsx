import { ReactComponent as Profile } from '@/assets/icons/profile.svg';

import * as styles from './index.css';

export const useMenu = () => {
  const SIDE_MENU = [
    { pathname: 'mogaco', value: 'mogaco', ariaLabel: '모각코' },
    { pathname: 'calendar', value: 'calendar', ariaLabel: '달력' },
    { pathname: 'map', value: 'map', ariaLabel: '지도' },
    {
      pathname: 'profile',
      value: (
        <Profile width={24} height={24} className={styles.profileButton} />
      ),
      ariaLabel: '프로필',
    },
  ];

  return { SIDE_MENU };
};
