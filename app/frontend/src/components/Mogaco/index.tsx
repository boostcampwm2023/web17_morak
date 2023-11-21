import * as styles from './index.css';
import { MogacoListHeader } from './MogacoListHeader';

export function MogacoPage() {
  return (
    <div className={styles.container}>
      <MogacoListHeader />
    </div>
  );
}
