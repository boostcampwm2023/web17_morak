import { useQuery } from '@tanstack/react-query';

import { Loading, MessageWrapper, MogacoItem } from '@/components';
import { queryKeys } from '@/queries';

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
        <MessageWrapper>
          <p className={styles.text}>
            게시물이 없습니다.
            <span className={styles.back}>이전 페이지로 돌아가기</span>
          </p>
        </MessageWrapper>
      )}
    </div>
  );
}
