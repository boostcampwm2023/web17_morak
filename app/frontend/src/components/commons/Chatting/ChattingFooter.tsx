import { Button } from '@/components/commons/Button';
import { Textarea } from '@/components/commons/Input/Textarea';

import * as styles from './index.css';

export function ChattingFooter() {
  return (
    <form className={styles.footer}>
      <Textarea maxLength={300} fullWidth />
      <Button
        type="submit"
        theme="primary"
        shape="fill"
        size="medium"
        onClick={() => {}}
        className={styles.submitButton}
      >
        보내기
      </Button>
    </form>
  );
}
