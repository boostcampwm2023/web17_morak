import { Button, MessageWrapper } from '@/components';

import * as styles from './ErrorPage.css';

export function ErrorPage() {
  const onClickRefresh = () => {
    window.location.href = '/mogaco';
  };

  return (
    <MessageWrapper>
      <p className={styles.text}>
        정보를 불러오는 데에 실패했습니다.
        <Button
          theme="primary"
          shape="line"
          size="large"
          onClick={onClickRefresh}
        >
          새로고침
        </Button>
      </p>
    </MessageWrapper>
  );
}
