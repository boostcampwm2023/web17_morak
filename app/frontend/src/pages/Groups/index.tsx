import { useQuery } from '@tanstack/react-query';

import { Group, LoadingIndicator } from '@/components';
import { queryKeys } from '@/queries';
import { vars } from '@/styles';
import { sansBold36 } from '@/styles/font.css';

import * as styles from './index.css';

export function Groups() {
  const { data: groupList, isLoading } = useQuery({
    ...queryKeys.group.all(),
    staleTime: Infinity,
  });

  const { data: myGroup } = useQuery({
    ...queryKeys.group.myGroup(),
    staleTime: Infinity,
  });

  const joinedGroup = myGroup?.[0];

  return (
    <div className={styles.container}>
      <h1 className={sansBold36}>그룹 리스트</h1>

      <div className={styles.groupWrapper}>
        {isLoading ? (
          <div className={styles.loading}>
            <LoadingIndicator color={vars.color.grayscaleBlack} size={30} />
          </div>
        ) : (
          groupList?.map((group) => (
            <Group
              key={group.id}
              name={group.title}
              id={group.id}
              joined={group.id === joinedGroup?.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
