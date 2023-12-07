import BackgroundImage from '@/assets/images/main.png';

import * as styles from './index.css';

type MessageWrapperProps = {
  children: React.ReactNode;
};
export function MessageWrapper({ children }: MessageWrapperProps) {
  return (
    <div className={styles.container}>
      <img
        src={BackgroundImage}
        alt="morak background"
        className={styles.background}
      />
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
