import { useState } from 'react';

import { EventClickArg } from '@fullcalendar/core/index.js';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { MogacoSideBar } from '@/components';
import { queryKeys } from '@/queries';
import { mogacoAtom } from '@/stores';

import { CalendarView } from './CalendarView';

export function Calendar() {
  const [closedSidebar, setClosedSidebar] = useState(true);

  const toggleSidebar = () => {
    setClosedSidebar(!closedSidebar);
  };

  const [mogacoId, setMogacoId] = useAtom(mogacoAtom);

  const { data: mogacoData } = useQuery({
    ...queryKeys.mogaco.detail(mogacoId),
    enabled: Number(mogacoId) !== -1,
  });

  const onClickEvent = (dayEvent: EventClickArg) => {
    const { event } = dayEvent;
    setClosedSidebar(false);
    setMogacoId(event.id);
  };

  return (
    <>
      <CalendarView onClickEvent={onClickEvent} />
      <MogacoSideBar
        closed={closedSidebar}
        toggleClosed={toggleSidebar}
        mogaco={mogacoData}
      />
    </>
  );
}
