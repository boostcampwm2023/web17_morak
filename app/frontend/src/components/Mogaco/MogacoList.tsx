import { useQuery } from '@tanstack/react-query';

import { MogacoItem } from '@/components';
import { mogaco } from '@/services';

import * as styles from './MogacoList.css';

export function MogacoList() {
  const { data: mogacoList } = useQuery({
    queryKey: ['mogaco', 'list'],
    queryFn: async () => mogaco.list(),
  });

  return (
    <div className={styles.container}>
      {mogacoList &&
        mogacoList.length > 0 &&
        mogacoList.map(
          ({
            id,
            memberId,
            groupId,
            title,
            contents,
            date,
            participantList,
            maxHumanCount,
            address,
            status,
          }) => (
            <MogacoItem
              key={id}
              id={id}
              memberId={memberId}
              title={title}
              groupId={groupId}
              contents={contents}
              participantList={participantList}
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
