import { useState } from 'react';

import { MogacoSideBar } from '@/components';

import { CalendarView } from './CalendarView';

export function Calendar() {
  const [closedSidebar, setClosedSidebar] = useState(true);
  const onClickCloseSidebar = () => {
    setClosedSidebar(!closedSidebar);
  };

  return (
    <>
      <CalendarView />
      <MogacoSideBar
        closed={closedSidebar}
        toggleClosed={onClickCloseSidebar}
      />
    </>
  );
}
