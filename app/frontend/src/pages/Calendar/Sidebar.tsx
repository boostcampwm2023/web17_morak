import { useState } from 'react';

import { Sidebar } from '@/components';

import * as styles from './Sidebar.css';

export function CalendarSidebar() {
  const [closed, setClosed] = useState(true);
  return (
    <Sidebar closed={closed} toggleClosed={() => setClosed(!closed)}>
      <div className={styles.container}>사이드바입니다</div>
    </Sidebar>
  );
}
