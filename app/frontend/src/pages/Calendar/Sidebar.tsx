import { useState } from 'react';

import { Sidebar, MogacoSidebarItem } from '@/components';

export function CalendarSidebar() {
  const [closed, setClosed] = useState(true);
  return (
    <Sidebar closed={closed} toggleClosed={() => setClosed(!closed)}>
      <MogacoSidebarItem />
    </Sidebar>
  );
}
