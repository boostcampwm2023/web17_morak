import { NavLink } from 'react-router-dom';

import dayjs from 'dayjs';

import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';
import { ReactComponent as People } from '@/assets/icons/people.svg';
import { Label } from '@/components';
import { MogacoProps } from '@/types';

import * as styles from './index.css';

export function MogacoItem({
  id,
  groupId,
  title,
  contents,
  date,
  participantList,
  maxHumanCount,
  address,
  status,
}: MogacoProps) {
  const MogacoLabel = (
    <Label theme="primary" shape="fill" disabled={status === '모집 완료'}>
      {status}
    </Label>
  );

  return (
    <NavLink to={`${id}`} className={styles.container}>
      <div className={styles.titleArea}>
        {MogacoLabel}
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.group}>{groupId}</div>
      <div className={styles.content}>
        <div className={styles.detail}>{contents}</div>
        <div className={styles.info}>
          <div className={styles.infoContent}>
            <People className={styles.icon} />
            <div className={styles.infoText}>
              {participantList?.length || 0}/{maxHumanCount}
            </div>
          </div>
          <div className={styles.infoContent}>
            <Map className={styles.icon} />
            <div className={styles.infoText}>{address}</div>
          </div>
          <div className={styles.infoContent}>
            <Calendar className={styles.icon} />
            <div className={styles.infoText}>
              {dayjs(date).format('YYYY/MM/DD HH:mm~')}
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
