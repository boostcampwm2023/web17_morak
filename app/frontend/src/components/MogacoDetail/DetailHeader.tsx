import { UserChip } from '@/components';
import { sansBold24 } from '@/styles/font.css';

import { DetailHeaderButtons } from './DetailHeaderButtons';
import * as styles from './index.css';

type DetailHeaderProps = {
  memberId: string;
  title: string;
  status: string;
};

export function DetailHeader({ memberId, title, status }: DetailHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div className={sansBold24}>{title}</div>
        <div className={styles.buttons}>
          <DetailHeaderButtons status={status} />
        </div>
      </div>
      <div className={styles.writer}>
        <UserChip
          username={memberId}
          profileSrc="https://avatars.githubusercontent.com/u/50646827?v=4"
        />
        <span>부스트캠프 웹·모바일 8기</span>
      </div>
    </div>
  );
}
