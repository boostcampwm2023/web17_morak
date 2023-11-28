import { EventClickArg } from '@fullcalendar/core/index.js';
import koLocale from '@fullcalendar/core/locales/ko';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';

import { vars } from '@/styles';

import * as styles from './CalendarView.css';

export function CalendarView({
  onClickEvent,
}: {
  onClickEvent: (dayEvent: EventClickArg) => void;
}) {
  return (
    <div className={styles.container}>
      <FullCalendar
        locale={koLocale}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends
        events={[
          {
            title: '12:00 인천 모각코 이벤트',
            date: '2023-11-22',
            id: '1',
          },
          {
            title: '12:00 이수 모각코 이벤트',
            date: '2023-11-22',
            id: '2',
          },
        ]}
        eventColor={vars.color.subGreen}
        eventTextColor={vars.color.grayscale500}
        eventClick={onClickEvent}
      />
    </div>
  );
}
