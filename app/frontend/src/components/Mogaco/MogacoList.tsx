import { useQuery } from '@tanstack/react-query';

import { MogacoItem } from '@/components';
import { queryKeys } from '@/queries';

import * as styles from './MogacoList.css';

export function MogacoList() {
  const { data: mogacoList } = useQuery(queryKeys.mogaco.list());

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
            />
          ),
        )}
    </div>
  );
}
