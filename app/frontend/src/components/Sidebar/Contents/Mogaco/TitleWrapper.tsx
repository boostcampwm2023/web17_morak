import { Label } from '@/components';

import * as styles from './index.css';

export function TitleWrapper() {
  return (
    <div className={styles.titleWrapper}>
      <Label theme="primary" shape="fill">
        모집 중
      </Label>
      <span className={styles.title}>모각코 함께 하기</span>
    </div>
  );
}
