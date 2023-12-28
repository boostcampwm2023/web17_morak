import { NavLink } from 'react-router-dom';

import { ResponseMogacoDto } from '@morak/apitype';
import { Label } from '@morak/ui';
import dayjs from 'dayjs';

import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';

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
    <Label
      theme={status === '모집 중' ? 'primary' : 'danger'}
      shape="fill"
      disabled={status === '모집 마감'}
    >
      {status}
    </Label>
  );

  return (
    <NavLink
      to={`/mogaco/${id}`}
      className={styles.container}
      aria-label={`${title}, ${status}`}
    >
      <div className={styles.titleArea}>
        {MogacoLabel}
        <h2 className={styles.title}>{title}</h2>
      </div>
      <span className={styles.group}>{groupTitle}</span>
      <div className={styles.content}>
        <p className={styles.detail}>{contents}</p>
        <div className={styles.info}>
          <address className={styles.infoContent}>
            <Map className={styles.icon} width={20} height={20} />
            <span className={styles.infoText}>{address}</span>
          </address>
          <time
            className={styles.infoContent}
            dateTime={dayjs(date).format('YYYY-MM-DD HH:mm')}
          >
            <Calendar className={styles.icon} width={20} height={20} />
            <span className={styles.infoText}>
              {dayjs(date).format('YYYY-MM-DD HH:mm~')}
            </span>
          </time>
        </div>
      </div>
    </NavLink>
  );
}
