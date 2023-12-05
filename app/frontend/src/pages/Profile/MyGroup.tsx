import { NavLink } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow_left.svg';
import { Group, LoadingIndicator } from '@/components';
import { queryKeys } from '@/queries';
import { vars } from '@/styles';
import { sansBold24 } from '@/styles/font.css';

import * as styles from './index.css';

export function MyGroup() {
  const { data: myGroup, isLoading } = useQuery({
    ...queryKeys.group.myGroup(),
    staleTime: Infinity,
  });
  return (
    <section className={styles.section}>
      <div className={sansBold24}>내가 속한 그룹</div>
      <ul className={styles.list}>
        {isLoading ? (
          <LoadingIndicator
            color={vars.color.grayscale500}
            size={30}
            className={styles.loading}
          />
        ) : (
          myGroup?.map((group) => (
            <Group key={group.id} name={group.title} joined />
          ))
        )}
      </ul>
      <NavLink to="/groups" className={styles.groupListButton}>
        <ArrowLeft
          fill={vars.color.morakGreen}
          width={24}
          height={24}
          className={styles.rotateArrow}
        />
        그룹 리스트 보기
      </NavLink>
      <div className={styles.groupButtons}>{/* <Button /> */}</div>
    </section>
  );
}
