import { useNavigate } from 'react-router-dom';

import { MessageWrapper } from '@/components';
import * as styles from '@/styles/message.css';

export function EmptyPage() {
  const navigate = useNavigate();
  const onClickBack = () => navigate(-1);

  return (
    <MessageWrapper>
      <p className={styles.text}>
        게시물이 없습니다.
        <button type="button" className={styles.button} onClick={onClickBack}>
          이전 페이지로 돌아가기
        </button>
      </p>
    </MessageWrapper>
  );
}
