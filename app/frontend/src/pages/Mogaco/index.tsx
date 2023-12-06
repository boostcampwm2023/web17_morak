import { Pagination } from '@/components';
import { usePagination } from '@/hooks';

import * as styles from './index.css';
import { MogacoList } from './MogacoList';
import { MogacoListHeader } from './MogacoListHeader';

export function MogacoPage() {
  const { currentPage, onClickItem, onClickNext, onClickPrev } =
    usePagination();
  return (
    <div className={styles.container}>
      <MogacoListHeader />
      <MogacoList currentPage={currentPage} />
      <Pagination
        currentPage={currentPage}
        onClickItem={onClickItem}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
      />
    </div>
  );
}
