import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/icons/morak.svg';

import * as styles from './index.css';
import { useClickMenu } from './useClickMenu';
import { useMenu } from './useMenu';

export function Header() {
  const { SIDE_MENU } = useMenu();
  const { pathname } = useLocation();

  const { onClickMenu, onEnterMenu } = useClickMenu();

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <NavLink to="/" className={styles.title} aria-label="홈으로">
          <Logo className={styles.logo} />
          <div className={styles.logoTitle}>morak</div>
        </NavLink>
        <nav>
          <ul className={styles.sideMenu} role="menubar" data-cy="header-menu">
            {SIDE_MENU.map((menu) => (
              <li
                tabIndex={0}
                key={menu.pathname}
                onClick={() => onClickMenu(menu.pathname)}
                onKeyDown={(e) => onEnterMenu(e, menu.pathname)}
                className={`${styles.sideMenuButton} ${
                  pathname === `/${menu.pathname}` ? styles.active : ''
                }`}
                role="menuitem"
                aria-label={menu.ariaLabel}
                data-cy="header-menu-item"
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
