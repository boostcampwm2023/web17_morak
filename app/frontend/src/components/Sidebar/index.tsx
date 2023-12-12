import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow_left.svg';
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
        data-cy="sidebar-button"
      >
        <ArrowLeft
          className={closed ? styles.flip : ''}
          width={24}
          height={24}
          fill={vars.color.grayscale200}
        />
      </button>
    </div>
  );
}
