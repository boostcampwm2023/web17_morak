import * as styles from './index.css';
import { MogacoList } from './MogacoList';
import { MogacoListHeader } from './MogacoListHeader';

export function MogacoPage() {
  return (
    <div className={styles.container}>
      <MogacoListHeader />
      <MogacoList />
    </div>
  );
}
