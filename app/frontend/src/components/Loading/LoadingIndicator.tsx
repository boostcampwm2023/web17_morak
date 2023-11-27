import { ReactComponent as Progress } from '@/assets/icons/progress.svg';
import { vars } from '@/styles';

import * as styles from './index.css';

type LoadingIndicatorProps = {
  color?: string;
  size?: number;
};

export function LoadingIndicator({
  color = vars.color.grayscaleWhite,
  size = 16,
}: LoadingIndicatorProps) {
  return (
    <Progress
      fill={color}
      width={size}
      height={size}
      className={styles.indicator}
    />
  );
}
