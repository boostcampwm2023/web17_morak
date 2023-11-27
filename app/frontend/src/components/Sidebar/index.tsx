import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow_left_large.svg';
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
        <ArrowLeft
          className={closed ? styles.flip : ''}
          fill={vars.color.grayscale200}
        />
      </button>
    </div>
  );
}
