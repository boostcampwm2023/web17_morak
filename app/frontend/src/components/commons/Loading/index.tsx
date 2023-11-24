import { sansRegular16 } from '@/styles/font.css';

import * as styles from './index.css';
import { LoadingIndicator } from './LoadingIndicator';

type LoadingIndicatorProps = {
  color?: string;
  text?: string;
};

export function Loading({ color, text = '로딩 중...' }: LoadingIndicatorProps) {
  return (
    <div className={styles.container}>
      <LoadingIndicator color={color} />
      <span className={sansRegular16}>{text}</span>
    </div>
  );
}
