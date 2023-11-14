import { ReactNode } from 'react';

import * as styles from './index.css';

type PopoverProps = {
  children: ReactNode;
  type: 'left' | 'center' | 'right';
};

export function Popover({ children, type }: PopoverProps) {
  return <div className={`${styles[type]} ${styles.container}`}>{children}</div>;
}
