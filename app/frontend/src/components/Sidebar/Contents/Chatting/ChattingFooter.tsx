import { useState } from 'react';

import { Button, Textarea } from '@/components';

import * as styles from './index.css';

type ChattingFooterProps = {
  userId: string;
  sendMessage: (message: string, userId: string) => void;
};

export function ChattingFooter({ userId, sendMessage }: ChattingFooterProps) {
  const [message, setMessage] = useState('');

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (/\S+/.test(message)) {
      sendMessage(message, userId);
      setMessage('');
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendMessage();
  };

  const onKeydownTextarea = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <form className={styles.footer} onSubmit={onSubmit}>
      <Textarea
        value={message}
        maxLength={300}
        fullWidth
        onChange={onChangeTextarea}
        onKeyDown={onKeydownTextarea}
      />
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
