import { Button } from '@/components';

import * as styles from './MogacoListHeader.css';

export function MogacoListHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <span className={styles.selected}>전체</span>
        <span>모집 중</span>
        <span>모집 마감</span>
      </div>
      <Button size="medium" type="button" theme="primary" shape="fill">
        글쓰기
      </Button>
    </div>
  );
}
