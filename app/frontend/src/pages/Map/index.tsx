import { Header, Map } from '@/components';

import * as styles from './index.css';

export function MapLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Map />
    </div>
  );
}
