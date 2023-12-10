import { useNavigate } from 'react-router-dom';

import { MessageWrapper } from '@/components';

import * as styles from './index.css';

export function NotFound() {
  const navigate = useNavigate();

  const onClickMain = () => {
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <MessageWrapper>
        <p className={styles.text}>
          {`페이지를 찾을 수 없습니다.\n`}
          <button type="button" onClick={onClickMain} className={styles.button}>
            메인 페이지로 이동하기
          </button>
        </p>
      </MessageWrapper>
    </div>
  );
}
