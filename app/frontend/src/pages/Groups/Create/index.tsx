import { Input } from '@/components';

import * as styles from './index.css';

export function GroupCreatePage() {
  return (
    <form className={styles.container}>
      <Input label="그룹명" required value="dd" />
    </form>
  );
}
