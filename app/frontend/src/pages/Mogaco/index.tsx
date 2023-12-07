import { useQuery } from '@tanstack/react-query';

import { Pagination } from '@/components';
import { usePagination } from '@/hooks';
import { queryKeys } from '@/queries';

import * as styles from './index.css';
import { MogacoList } from './MogacoList';
import { MogacoListHeader } from './MogacoListHeader';

export function MogacoPage() {
  const { currentPage, onClickItem, onClickNext, onClickPrev } =
    usePagination();

  const { data: mogacoList } = useQuery(
    queryKeys.mogaco.list({ page: currentPage.toString() }),
  );
  return (
    <div className={styles.container}>
      <MogacoListHeader />
      <MogacoList currentPage={currentPage} />
      {mogacoList?.length !== 0 && (
        <Pagination
          className={styles.pagination}
          currentPage={currentPage}
          onClickItem={onClickItem}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
        />
      )}
    </div>
  );
}
