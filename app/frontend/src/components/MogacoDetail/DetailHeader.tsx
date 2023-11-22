import { sansBold24 } from '@/styles/font.css';

import { DetailHeaderButtons } from './DetailHeaderButtons';
import * as styles from './index.css';

type DetailHeaderProps = {
  title: string;
  status: string;
};

export function DetailHeader({ title, status }: DetailHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={sansBold24}>{title}</div>
      <div className={styles.buttons}>
        <DetailHeaderButtons status={status} />
      </div>
    </div>
  );
}
