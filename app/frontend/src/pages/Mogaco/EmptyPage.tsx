import { MessageWrapper } from '@/components';

import * as styles from './EmptyPage.css';

export function EmptyPage() {
  return (
    <MessageWrapper>
      <p className={styles.text}>
        게시물이 없습니다.
        <span className={styles.back}>이전 페이지로 돌아가기</span>
      </p>
    </MessageWrapper>
  );
}
