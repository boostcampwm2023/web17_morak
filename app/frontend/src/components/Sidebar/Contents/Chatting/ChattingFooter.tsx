import { Button, Textarea } from '@/components';

import * as styles from './index.css';

type ChattingFooterProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function ChattingFooter({
  value,
  onChange,
  onSubmit,
}: ChattingFooterProps) {
  return (
    <form className={styles.footer} onSubmit={onSubmit}>
      <Textarea maxLength={300} fullWidth onChange={onChange} value={value} />
      <Button
        type="submit"
        theme="primary"
        shape="fill"
        size="medium"
        className={styles.submitButton}
      >
        보내기
      </Button>
    </form>
  );
}
