import { useNavigate } from 'react-router-dom';

import { MessageWrapper } from '@/components';

import * as styles from './EmptyPage.css';

export function NoGroupPage() {
  const navigate = useNavigate();
  const onClickRefresh = () => {
    navigate('/groups');
  };

  return (
    <MessageWrapper>
      <p className={styles.text}>
        {`참여한 그룹이 없습니다.\n그룹에 먼저 참여해 주세요.`}
        <button
          type="button"
          onClick={onClickRefresh}
          className={styles.button}
        >
          그룹 참여하러 가기
        </button>
      </p>
    </MessageWrapper>
  );
}
