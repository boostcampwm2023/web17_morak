import { NavLink } from 'react-router-dom';

import { ResponseMogacoDto } from '@morak/apitype';
import dayjs from 'dayjs';

import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';
import { Label } from '@/components';

import * as styles from './index.css';

type MogacoProps = Omit<
  ResponseMogacoDto,
  | 'createdAt'
  | 'deletedAt'
  | 'updatedAt'
  | 'latitude'
  | 'longitude'
  | 'groupId'
  | 'maxHumanCount'
>;

export function MogacoItem({
  id,
  group: { title: groupTitle },
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
    <NavLink to={`/mogaco/${id}`} className={styles.container}>
      <div className={styles.titleArea}>
        {MogacoLabel}
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.group}>{groupTitle}</div>
      <div className={styles.content}>
        <div className={styles.detail}>{contents}</div>
        <div className={styles.info}>
          <div className={styles.infoContent}>
            <Map className={styles.icon} width={20} height={20} />
            <div className={styles.infoText}>{address}</div>
          </div>
          <div className={styles.infoContent}>
            <Calendar className={styles.icon} width={20} height={20} />
            <div className={styles.infoText}>
              {dayjs(date).format('YYYY/MM/DD HH:mm~')}
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
