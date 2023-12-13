import { ReactComponent as Arrow } from '@/assets/icons/arrow_left.svg';
import { vars } from '@/styles';
import { createRangeArray, get10UnitRange } from '@/utils';

import * as styles from './index.css';

const { grayscale200 } = vars.color;
type PaginationProps = {
  currentPage: number;
  pageCount?: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickItem: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function Pagination({
  currentPage,
  pageCount,
  onClickPrev,
  onClickNext,
  onClickItem,
  className,
}: PaginationProps) {
  const [start, end] = get10UnitRange(currentPage);
  const lastPageNum = pageCount ? Math.min(end, pageCount) : end;
  const array = createRangeArray(start, lastPageNum);
  const arrow = <Arrow width={16} height={16} fill={grayscale200} />;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPageNum;

  return (
    <div className={`${styles.container} ${className}`}>
      <button
        type="button"
        onClick={onClickPrev}
        disabled={isFirstPage}
        aria-label="prev-page"
      >
        {arrow}
      </button>
      {array.map((page) => (
        <button
          onClick={onClickItem}
          className={`${styles.page} ${
            currentPage === page ? styles.current : ''
          }`}
          type="button"
          key={page}
          value={page}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={styles.rotateArrow}
        onClick={onClickNext}
        disabled={isLastPage}
        aria-label="next-page"
      >
        {arrow}
      </button>
    </div>
  );
}
