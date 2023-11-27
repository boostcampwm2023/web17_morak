import { useState } from 'react';

import { MogacoSideBar } from '@/components';

import { CalendarView } from './CalendarView';

export function Calendar() {
  const [closedSidebar, setClosedSidebar] = useState(true);

  const toggleSidebar = () => {
    setClosedSidebar(!closedSidebar);
  };

  const onClickEvent = () => {
    setClosedSidebar(false);
  };
  return (
    <>
      <CalendarView onClickEvent={onClickEvent} />
      <MogacoSideBar closed={closedSidebar} toggleClosed={toggleSidebar} />
    </>
  );
}
