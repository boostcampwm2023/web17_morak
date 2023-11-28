import * as styles from './NotifyWrapper.css';

export function NotifyWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
