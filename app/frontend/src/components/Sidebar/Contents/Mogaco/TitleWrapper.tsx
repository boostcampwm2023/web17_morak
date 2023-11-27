import { Label } from '@/components';
import { MogacoTypes } from '@/types';

import * as styles from './index.css';

export function TitleWrapper({
  status,
  title,
}: Pick<MogacoTypes, 'title' | 'status'>) {
  return (
    <div className={styles.titleWrapper}>
      <Label theme="primary" shape="fill">
        {status}
      </Label>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
