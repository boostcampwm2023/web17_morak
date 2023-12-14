import { useNavigate } from 'react-router-dom';

import { Button } from '@morak/ui';
import { useQuery } from '@tanstack/react-query';

import { PATH } from '@/constants';
import { queryKeys } from '@/queries';

import * as styles from './MogacoListHeader.css';

export function MogacoListHeader() {
  const navigate = useNavigate();
  const onClickPost = () => {
    navigate(PATH.POST);
  };

  const { data: myGroup } = useQuery({
    ...queryKeys.group.myGroup(),
    staleTime: Infinity,
  });

  const noGroup = myGroup?.length === 0;

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <span className={styles.selected}>전체</span>
        <span>모집 중</span>
        <span>모집 마감</span>
      </div>
      <Button
        size="medium"
        type="button"
        theme="primary"
        shape="fill"
        onClick={onClickPost}
        disabled={noGroup}
      >
        글쓰기
      </Button>
    </div>
  );
}
