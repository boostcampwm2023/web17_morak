import dayjs from 'dayjs';

import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';
import { ReactComponent as People } from '@/assets/icons/people.svg';
import { MogacoTypes } from '@/types';

import * as styles from './index.css';

export function InfoWrapper({
  date,
  participantCount,
  maxHumanCount,
  address,
}: Pick<MogacoTypes, 'date' | 'maxHumanCount' | 'address'> & {
  participantCount: number;
}) {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoContent}>
        <People className={styles.icon} width={16} height={16} />
        <div className={styles.infoText}>
          {participantCount}/{maxHumanCount}
        </div>
      </div>
      <div className={styles.infoContent}>
        <Map className={styles.icon} width={16} height={16} />
        <div className={styles.infoText}>{address}</div>
      </div>
      <div className={styles.infoContent}>
        <Calendar className={styles.icon} width={16} height={16} />
        <div className={styles.infoText}>
          {dayjs(date).format('YYYY/MM/DD HH:mm~')}
        </div>
      </div>
    </div>
  );
}
