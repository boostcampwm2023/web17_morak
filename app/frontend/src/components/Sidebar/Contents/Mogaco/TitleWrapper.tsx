import { ResponseMogacoDto } from '@morak/apitype';

import { Label } from '@/components';
import { sansBold24 } from '@/styles/font.css';

import * as styles from './index.css';

export function TitleWrapper({
  status,
  title,
}: Pick<ResponseMogacoDto, 'title' | 'status'>) {
  return (
    <div className={styles.titleWrapper}>
      <Label theme="primary" shape="fill">
        {status}
      </Label>
      <span className={sansBold24}>{title}</span>
    </div>
  );
}
