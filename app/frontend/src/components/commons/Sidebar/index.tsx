import { ReactComponent as LeftArrow } from '@/assets/icons/leftArrow.svg';
import { vars } from '@/styles';

import * as styles from './index.css';

type SidebarProps = {
  closed: boolean;
  toggleClosed: () => void;
  children: React.ReactNode;
};

export function Sidebar({ closed, toggleClosed, children }: SidebarProps) {
  return (
    <div className={`${styles.wrapper} ${closed && styles.closed}`}>
      <div className={styles.panel}>{children}</div>
      <button
        type="button"
        className={styles.closeButton}
        onClick={toggleClosed}
      >
        <LeftArrow
          className={closed ? styles.flip : ''}
          fill={vars.color.grayscale200}
        />
      </button>
    </div>
  );
}
