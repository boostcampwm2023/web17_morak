import { useState } from 'react';

import { EventClickArg } from '@fullcalendar/core/index.js';
import koLocale from '@fullcalendar/core/locales/ko';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';

import { vars } from '@/styles';

import * as styles from './CalendarView.css';
import { useCalendarMogacoQuery } from './useMogacoQuery';

const { subGreen, grayscale500 } = vars.color;

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
        eventColor={subGreen}
        eventBackgroundColor={subGreen}
        eventTextColor={grayscale500}
        eventDisplay="block"
        eventClick={onClickEvent}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }}
        contentHeight="auto"
      />
    </div>
  );
}
