import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/icons/morak.svg';

import * as styles from './index.css';
import { useClickMenu } from './useClickMenu';
import { useMenu } from './useMenu';

export function Header() {
  const { SIDE_MENU } = useMenu();
  const { pathname } = useLocation();

  const { onClickMenu } = useClickMenu();

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <NavLink to="/" className={styles.title}>
          <Logo className={styles.logo} />
          <div className={styles.logoTitle}>morak</div>
        </NavLink>
        <nav>
          <ul className={styles.sideMenu} role="menubar">
            {SIDE_MENU.map((menu) => (
              <li
                key={menu.pathname}
                onClick={() => onClickMenu(menu.pathname)}
                onKeyDown={() => onClickMenu(menu.pathname)}
                className={`${styles.sideMenuButton} ${
                  pathname === `/${menu.pathname}` ? styles.active : ''
                }`}
                role="menuitem"
                aria-label={menu.pathname}
              >
                {menu.value}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
