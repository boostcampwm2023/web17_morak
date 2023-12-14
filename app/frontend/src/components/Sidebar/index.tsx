import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow_left.svg';
import { ReactComponent as Morak } from '@/assets/icons/morak.svg';
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
      <div className={`${styles.panel} ${closed && styles.hidden}`}>
        {children}
      </div>
      <div className={styles.emptyPanel}>
        <Morak width={64} height={64} />
      </div>
      <button
        type="button"
        className={styles.closeButton}
        onClick={toggleClosed}
        data-cy="sidebar-button"
        aria-label={closed ? '사이드바 열기' : '사이드바 닫기'}
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
