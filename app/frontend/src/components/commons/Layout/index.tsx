import { Outlet } from 'react-router-dom';

import * as styles from './index.css';
import { Header } from '../Header';

export function Layout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
