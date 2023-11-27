import dayjs from 'dayjs';

import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';
import { ReactComponent as People } from '@/assets/icons/people.svg';

import * as styles from './index.css';

export function InfoWrapper() {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoContent}>
        <People className={styles.icon} width={16} height={16} />
        <div className={styles.infoText}>2/5</div>
      </div>
      <div className={styles.infoContent}>
        <Map className={styles.icon} width={16} height={16} />
        <div className={styles.infoText}>
          서울 관악구 남현3길 71 크레이저 커피
        </div>
      </div>
      <div className={styles.infoContent}>
        <Calendar className={styles.icon} width={16} height={16} />
        <div className={styles.infoText}>
          {dayjs('2023-11-7').format('YYYY/MM/DD HH:mm~')}
        </div>
      </div>
    </div>
  );
}
