import { ReactComponent as Progress } from '@/assets/icons/progress.svg';
import { vars } from '@/styles';

import * as styles from './index.css';

type LoadingIndicatorProps = {
  color?: string;
  size?: number;
  className?: string;
};

export function LoadingIndicator({
  color = vars.color.grayscaleWhite,
  size = 16,
  className,
}: LoadingIndicatorProps) {
  return (
    <div className={className}>
      <Progress
        fill={color}
        width={size}
        height={size}
        className={styles.indicator}
      />
    </div>
  );
}
