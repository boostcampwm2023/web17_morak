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
    <ul className={styles.container}>
      {mogacoList && mogacoList.length > 0 ? (
        mogacoList.map(
          ({ id, title, contents, date, address, status, group }) => (
            <li key={id}>
              <MogacoItem
                id={id}
                group={group}
                title={title}
                contents={contents}
                date={date}
                address={address}
                status={status}
              />
            </li>
          ),
        )
      ) : (
        <EmptyPage />
      )}
    </ul>
  );
}
