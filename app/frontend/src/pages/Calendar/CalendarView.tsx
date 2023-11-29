import { useState } from 'react';

import { EventClickArg } from '@fullcalendar/core/index.js';
import koLocale from '@fullcalendar/core/locales/ko';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { queryKeys } from '@/queries';
import { vars } from '@/styles';
import { Mogaco } from '@/types';

import * as styles from './CalendarView.css';

export function CalendarView({
  onClickEvent,
}: {
  onClickEvent: (dayEvent: EventClickArg) => void;
}) {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const refineMogacoList = (mogacoList: Mogaco[]) =>
    mogacoList.map((mogaco) => {
      const { id, title, date } = mogaco;
      return { id, title, date };
    });

  const { data: mogacoData } = useQuery({
    ...queryKeys.mogaco.list({ date: dayjs(selectedMonth).format('YYYY-MM') }),
    select: refineMogacoList,
  });

  return (
    <div className={styles.container}>
      <FullCalendar
        datesSet={(dateInfo) => setSelectedMonth(dateInfo.view.currentStart)}
        locale={koLocale}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends
        events={mogacoData || []}
        eventColor={vars.color.subGreen}
        eventBackgroundColor={vars.color.subGreen}
        eventTextColor={vars.color.grayscale500}
        eventDisplay="block"
        eventClick={onClickEvent}
      />
    </div>
  );
}
