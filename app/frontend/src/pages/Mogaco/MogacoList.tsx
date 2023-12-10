import { useQuery } from '@tanstack/react-query';

import { Loading, MogacoItem } from '@/components';
import { queryKeys } from '@/queries';

import { EmptyPage } from './EmptyPage';
import { ErrorPage } from './ErrorPage';
import * as styles from './MogacoList.css';
import { NoGroupPage } from './NoGroupPage';

type MogacoListProp = {
  currentPage: number;
};

export function MogacoList({ currentPage }: MogacoListProp) {
  const { data: mogacoList, isLoading: isMogacoListLoading } = useQuery(
    queryKeys.mogaco.list({ page: currentPage.toString() }),
  );

  const { data: myGroup, isLoading: isMyGroupLoading } = useQuery({
    ...queryKeys.group.myGroup(),
    staleTime: Infinity,
  });

  const noGroup = myGroup?.length === 0;

  if (isMogacoListLoading || isMyGroupLoading) {
    return (
      <div className={styles.container}>
        <Loading />
      </div>
    );
  }

  if (noGroup) {
    return (
      <div className={styles.container}>
        <NoGroupPage />
      </div>
    );
  }

  if (!mogacoList) {
    return (
      <div className={styles.container}>
        <ErrorPage />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {mogacoList && mogacoList.length > 0 ? (
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
        )
      ) : (
        <EmptyPage />
      )}
    </div>
  );
}
