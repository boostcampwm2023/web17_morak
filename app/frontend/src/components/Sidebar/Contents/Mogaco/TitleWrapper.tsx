import { ResponseMogacoDto } from '@morak/apitype';
import { Label } from '@morak/ui';

import * as styles from './index.css';

export function TitleWrapper({
  status,
  title,
}: Pick<ResponseMogacoDto, 'title' | 'status'>) {
  return (
    <div className={styles.titleWrapper}>
      <Label
        theme={status === '모집 중' ? 'primary' : 'danger'}
        shape="fill"
        disabled={status === '모집 마감'}
      >
        {status}
      </Label>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
