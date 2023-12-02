import { useState } from 'react';

import { Button, Textarea } from '@/components';

import * as styles from './index.css';

type ChattingFooterProps = {
  sendMessage: (message: string) => void;
};

export function ChattingFooter({ sendMessage }: ChattingFooterProps) {
  const [message, setMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;

    sendMessage(message);
    setMessage('');
  };

  return (
    <form className={styles.footer} onSubmit={onSubmit}>
      <Textarea maxLength={300} fullWidth onChange={onChange} value={message} />
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
