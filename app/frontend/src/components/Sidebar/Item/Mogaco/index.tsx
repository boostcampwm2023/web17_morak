import dayjs from 'dayjs';

import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Map } from '@/assets/icons/map.svg';
import { ReactComponent as People } from '@/assets/icons/people.svg';
import { Button, Label } from '@/components';

import * as styles from './index.css';

export function MogacoSidebarItem() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <Label theme="primary" shape="fill">
            모집 중
          </Label>
          <span className={styles.title}>모각코 함께 하기</span>
        </div>
        <span className={styles.group}>부스트캠프 웹모바일 8기</span>
        <div className={styles.infoWrapper}>
          <div className={styles.infoContent}>
            <People className={styles.icon} />
            <div className={styles.infoText}>2/5</div>
          </div>
          <div className={styles.infoContent}>
            <Map className={styles.icon} />
            <div className={styles.infoText}>
              서울 관악구 남현3길 71 크레이저 커피
            </div>
          </div>
          <div className={styles.infoContent}>
            <Calendar className={styles.icon} />
            <div className={styles.infoText}>
              {dayjs('2023-11-7').format('YYYY/MM/DD HH:mm~')}
            </div>
          </div>
        </div>
        <p className={styles.contents}>
          사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락
          팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서
          부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락 팀이 모입니다
          사당역에서 부스트캠프 모락 팀이 모입니다 사당역에서 부스트캠프 모락
          팀이 모입니다
        </p>
      </div>
      <Button fullWidth shape="fill" theme="primary" size="large">
        글로 이동하기
      </Button>
    </div>
  );
}
