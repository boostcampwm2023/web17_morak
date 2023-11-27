import { NavLink } from 'react-router-dom';

import dayjs from 'dayjs';

import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';
import { Label } from '@/components';
import { Mogaco } from '@/types';

import * as styles from './index.css';

type MogacoProps = Omit<Mogaco, 'member'>;

export function MogacoItem({
  id,
  groupId,
  title,
  contents,
  date,
  address,
  status,
}: MogacoProps) {
  const MogacoLabel = (
    <Label theme="primary" shape="fill" disabled={status === '마감'}>
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
