import { useState } from 'react';

import { EventClickArg } from '@fullcalendar/core/index.js';
import koLocale from '@fullcalendar/core/locales/ko';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';

import { vars } from '@/styles';

import * as styles from './CalendarView.css';
import { useCalendarMogacoQuery } from './useMogacoQuery';

export function CalendarView({
  onClickEvent,
}: {
  onClickEvent: (dayEvent: EventClickArg) => void;
}) {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const { data: mogacoData } = useCalendarMogacoQuery(selectedMonth);

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
