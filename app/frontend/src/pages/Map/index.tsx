import { useState } from 'react';

import { Header, Map, MogacoSideBar } from '@/components';

import * as styles from './index.css';

export function MapLayout() {
  const [closedSidebar, setClosedSidebar] = useState(true);
  const onClickCloseSidebar = () => {
    setClosedSidebar(!closedSidebar);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Map
        onClickMarker={() => {
          setClosedSidebar(false);
        }}
      />
      <MogacoSideBar
        closed={closedSidebar}
        toggleClosed={onClickCloseSidebar}
      />
    </div>
  );
}
