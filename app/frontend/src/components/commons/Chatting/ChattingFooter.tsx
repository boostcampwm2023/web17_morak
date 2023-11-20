import { Button } from '@/components/commons/Button';

import * as styles from './index.css';

export function ChattingFooter() {
  return (
    <form className={styles.footer}>
      <textarea className={styles.textarea} rows={4} />
      <Button type="submit" theme="primary" shape="fill" size="medium" onClick={() => {}}>
        보내기
      </Button>
    </form>
  );
}
