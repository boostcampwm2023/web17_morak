import { sansBold24 } from '@/styles/font.css';

import { DetailHeaderButtons } from './DetailHeaderButtons';
import * as styles from './index.css';

type DetailHeaderProps = {
  state: 'not-participated' | 'participated' | 'hosted';
};

export function DetailHeader({ state }: DetailHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={sansBold24}>모각코 함께 해요</div>
      <div className={styles.buttons}>
        <DetailHeaderButtons state={state} />
      </div>
    </div>
  );
}
