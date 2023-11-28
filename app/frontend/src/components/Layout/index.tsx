import { Outlet } from 'react-router-dom';

import { Header, ModalContainer } from '@/components';

import * as styles from './index.css';

export function Layout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <ModalContainer />
    </>
  );
}
