import { NavLink } from 'react-router-dom';

import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';
import { ReactComponent as People } from '@/assets/icons/people.svg';
import { Label } from '@/components';

import * as styles from './index.css';

type MogacoProps = {
  id: number;
  disabled?: boolean;
  title: string;
  group: string;
  detail: string;
  people: number;
  maxPeople: number;
  location: string;
  date: string;
};

export function MogacoItem({
  id,
  disabled = false,
  title,
  group,
  detail,
  people,
  maxPeople,
  location,
  date,
}: MogacoProps) {
  const MogacoLabel = (
    <Label theme="primary" shape="fill" disabled={disabled}>
      {disabled ? '모집 완료' : '모집 중'}
    </Label>
  );

  return (
    <NavLink to={`${id}`} className={styles.container}>
      <div className={styles.titleArea}>
        {MogacoLabel}
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.group}>{group}</div>
      <div className={styles.content}>
        <div className={styles.detail}>{detail}</div>
        <div className={styles.info}>
          <div className={styles.infoContent}>
            <People className={styles.icon} />
            <div className={styles.infoText}>
              {people}/{maxPeople}
            </div>
          </div>
          <div className={styles.infoContent}>
            <Map className={styles.icon} />
            <div className={styles.infoText}>{location}</div>
          </div>
          <div className={styles.infoContent}>
            <Calendar className={styles.icon} />
            <div className={styles.infoText}>{date}</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
