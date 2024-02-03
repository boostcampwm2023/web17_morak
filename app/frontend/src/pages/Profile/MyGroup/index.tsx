import { NavLink } from 'react-router-dom';

import { Button } from '@morak/ui';
import { useQuery } from '@tanstack/react-query';

import { Error, Group, LoadingIndicator } from '@/components';
import { queryKeys } from '@/queries';
import { vars } from '@/styles';
import { sansBold24 } from '@/styles/font.css';

import * as styles from './index.css';

export function MyGroup() {
  const {
    data: myGroup,
    isLoading,
    isSuccess,
  } = useQuery({
    ...queryKeys.group.myGroup(),
    staleTime: Infinity,
  });

  return (
    <section className={styles.section}>
      <div className={sansBold24}>내가 속한 그룹</div>
      <ul className={styles.list}>
        {isLoading && (
          <LoadingIndicator
            color={vars.color.grayscale500}
            size={30}
            className={styles.loading}
          />
        )}
        {isSuccess &&
          myGroup.length > 0 &&
          myGroup?.map((group) => (
            <Group key={group.id} id={group.id} name={group.title} joined />
          ))}
        {isSuccess && myGroup.length === 0 && (
          <Error message="현재 속한 그룹이 없습니다. 그룹에 참여해 주세요." />
        )}
      </ul>
      <div className={styles.groupButtons}>
        <NavLink to="/groups" className={styles.groupButton}>
          <Button
            type="button"
            theme="primary"
            shape="line"
            size="large"
            fullWidth
          >
            그룹 참여
          </Button>
        </NavLink>
        <NavLink to="/group/new" className={styles.groupButton}>
          <Button
            type="button"
            theme="primary"
            shape="line"
            size="large"
            fullWidth
          >
            새 그룹 생성
          </Button>
        </NavLink>
      </div>
    </section>
  );
}
