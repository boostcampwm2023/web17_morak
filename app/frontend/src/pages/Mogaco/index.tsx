import { Pagination } from '@morak/ui';
import { useQuery } from '@tanstack/react-query';

import { usePagination } from '@/hooks';
import { queryKeys } from '@/queries';

import * as styles from './index.css';
import { MogacoList } from './MogacoList';
import { MogacoListHeader } from './MogacoListHeader';

const PAGE_UNIT = 10;
export function MogacoPage() {
  const { currentPage, onClickItem, onClickNext, onClickPrev } =
    usePagination();

  const { data: mogacoList } = useQuery(
    queryKeys.mogaco.list({ page: currentPage.toString() }),
  );
  const { data: allMogacoList } = useQuery(queryKeys.mogaco.list());

  return (
    <main className={styles.container}>
      <MogacoListHeader />
      <MogacoList currentPage={currentPage} />
      {mogacoList?.length !== 0 && (
        <Pagination
          className={styles.pagination}
          currentPage={currentPage}
          postPerPage={PAGE_UNIT}
          postCount={allMogacoList?.length || 0}
          onClickItem={onClickItem}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
        />
      )}
    </main>
  );
}
