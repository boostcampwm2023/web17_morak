import { useState } from 'react';

import { EventClickArg } from '@fullcalendar/core/index.js';
import { useAtom } from 'jotai';

import { MogacoSideBar } from '@/components';
import { mogacoAtom } from '@/stores';

import { CalendarView } from './CalendarView';

export function Calendar() {
  const [closedSidebar, setClosedSidebar] = useState(true);

  const toggleSidebar = () => {
    setClosedSidebar(!closedSidebar);
  };

  const [, setMogacoId] = useAtom(mogacoAtom);

  const onClickEvent = (dayEvent: EventClickArg) => {
    const { event } = dayEvent;
    setClosedSidebar(false);
    setMogacoId(event.id);
  };

  return (
    <>
      <CalendarView onClickEvent={onClickEvent} />
      <MogacoSideBar closed={closedSidebar} toggleClosed={toggleSidebar} />
    </>
  );
}
