import { useQuery } from '@tanstack/react-query';

import { Loading, MogacoItem } from '@/components';
import { queryKeys } from '@/queries';

import * as styles from './MogacoList.css';

export function MogacoList() {
  const { data: mogacoList, isLoading } = useQuery(
    queryKeys.mogaco.list({ page: '1' }),
  );

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {mogacoList &&
        mogacoList.length > 0 &&
        mogacoList.map(
          ({
            id,
            groupId,
            title,
            contents,
            date,
            maxHumanCount,
            address,
            status,
            group,
          }) => (
            <MogacoItem
              key={id}
              id={id}
              title={title}
              groupId={groupId}
              contents={contents}
              maxHumanCount={maxHumanCount}
              address={address}
              date={date}
              status={status}
              group={group}
            />
          ),
        )}
    </div>
  );
}
