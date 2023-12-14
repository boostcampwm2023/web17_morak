import { MessageWrapper } from '@/components';
import * as styles from '@/styles/message.css';

export function ErrorPage() {
  const onClickRefresh = () => {
    window.location.href = '/mogaco';
  };

  return (
    <MessageWrapper>
      <p className={styles.text}>
        정보를 불러오는 데에 실패했습니다.
        <button
          type="button"
          className={styles.button}
          onClick={onClickRefresh}
        >
          새로고침
        </button>
      </p>
    </MessageWrapper>
  );
}
