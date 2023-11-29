import { useState } from 'react';

import { useAtom } from 'jotai';

import { Header, Map, MogacoSideBar } from '@/components';
import { mogacoAtom } from '@/stores';

import * as styles from './index.css';

type MarkerProps = { id: string };

export function MapLayout() {
  const [closedSidebar, setClosedSidebar] = useState(true);
  const onClickCloseSidebar = () => {
    setClosedSidebar(!closedSidebar);
  };
  const [, setMogacoId] = useAtom(mogacoAtom);

  const onClickMarker = ({ id }: MarkerProps) => {
    setClosedSidebar(false);
    setMogacoId(id);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Map onClickMarker={onClickMarker} />
      <MogacoSideBar
        closed={closedSidebar}
        toggleClosed={onClickCloseSidebar}
      />
    </div>
  );
}
