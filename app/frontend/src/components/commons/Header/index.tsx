import logo from '@assets/icons/morak.svg';
import profile from '@assets/icons/profile.svg';
import { NavLink } from 'react-router-dom';

import * as styles from './index.css';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink to="/" className={styles.title}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.logoTitle}>morak</div>
        </NavLink>
        <div className={styles.sideMenu}>
          <NavLink to="/calendar" className={styles.sideMenuButton}>
            calendar
          </NavLink>
          <NavLink to="/mogaco" className={styles.sideMenuButton}>
            mogaco
          </NavLink>
          <NavLink to="/map" className={styles.sideMenuButton}>
            map
          </NavLink>
          <NavLink to="/profile">
            <img src={profile} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
