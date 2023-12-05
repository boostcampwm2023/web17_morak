import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/icons/morak.svg';

import * as styles from './index.css';
import { useMenu } from './useMenu';

export function Header() {
  const { SIDE_MENU } = useMenu();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClickMenu = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink to="/" className={styles.title}>
          <Logo className={styles.logo} />
          <div className={styles.logoTitle}>morak</div>
        </NavLink>
        <li className={styles.sideMenu}>
          {SIDE_MENU.map((menu) => (
            <ul
              role="menu"
              key={menu.pathname}
              onClick={() => onClickMenu(menu.pathname)}
              onKeyDown={() => onClickMenu(menu.pathname)}
              className={`${styles.sideMenuButton} ${
                pathname === `/${menu.pathname}` ? styles.active : ''
              }`}
            >
              {menu.value}
            </ul>
          ))}
        </li>
      </div>
    </div>
  );
}
