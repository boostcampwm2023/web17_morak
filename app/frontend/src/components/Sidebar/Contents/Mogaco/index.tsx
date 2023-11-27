import { Button } from '@/components';

import * as styles from './index.css';
import { InfoWrapper } from './InfoWrapper';
import { TitleWrapper } from './TitleWrapper';

export function MogacoSidebarItem() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <TitleWrapper />
        <span className={styles.group}>부스트캠프 웹모바일 8기</span>
        <InfoWrapper />
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
