import { ReactComponent as ErrorIcon } from '@/assets/icons/error_diamond.svg';
import { vars } from '@/styles';

import * as styles from './index.css';

type ErrorProps = {
  message: string;
};

export function Error({ message }: ErrorProps) {
  return (
    <div className={styles.container}>
      <ErrorIcon fill={vars.color.morakRed} />
      {message}
    </div>
  );
}
