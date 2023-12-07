import { useQuery } from '@tanstack/react-query';

import { Error, Loading, MogacoItem } from '@/components';
import { queryKeys } from '@/queries';

import { EmptyPage } from './EmptyPage';
import * as styles from './MogacoList.css';

type MogacoListProp = {
  currentPage: number;
};

export function MogacoList({ currentPage }: MogacoListProp) {
  const { data: mogacoList, isLoading } = useQuery(
    queryKeys.mogaco.list({ page: currentPage.toString() }),
  );

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loading />
      </div>
    );
  }

  if (!mogacoList) {
    return <Error message="모각코 정보를 불러오는 데에 실패했습니다." />;
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
