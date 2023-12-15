import { ReactNode } from 'react';

import * as styles from './index.css';

type PopoverProps = {
  children: ReactNode;
  type?: 'left' | 'center' | 'right';
  className?: string;
};

export function Popover({
  children,
  type = 'center',
  className,
}: PopoverProps) {
  return (
    <div className={`${styles[type]} ${styles.container} ${className || ''}`}>
      {children}
    </div>
  );
}
