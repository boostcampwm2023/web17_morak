import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';

import * as styles from './CalendarView.css';

export function CalendarView() {
  return (
    <div className={styles.container}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends
        events={[
          { title: 'event 1', date: '2023-11-01' },
          { title: 'event 2', date: '2023-11-02' },
        ]}
      />
    </div>
  );
}
