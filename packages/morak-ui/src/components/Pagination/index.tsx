import { ReactComponent as Arrow } from '@/assets/icons/arrow_left.svg';
import { vars } from '@/styles';
import { createRangeArray, get10UnitRange } from '@/utils';

import * as styles from './index.css';

const { grayscale200 } = vars.color;
type PaginationProps = {
  currentPage: number;
  postPerPage: number;
  postCount: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickItem: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function Pagination({
  currentPage,
  postPerPage,
  postCount,
  onClickPrev,
  onClickNext,
  onClickItem,
  className,
}: PaginationProps) {
  const [start, end] = get10UnitRange(currentPage);
  const lastPageNum = Math.min(end, Math.ceil(postCount / postPerPage));
  const pageNumbers = createRangeArray(start, lastPageNum);
  const arrow = <Arrow width={16} height={16} fill={grayscale200} />;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPageNum;

  return (
    <nav role="navigation" aria-label="페이지 선택">
      <ul className={`${styles.container} ${className}`}>
        <li>
          <button
            type="button"
            onClick={onClickPrev}
            disabled={isFirstPage}
            aria-label="이전 페이지"
          >
            {arrow}
          </button>
        </li>
        {pageNumbers.map((page: number) => (
          <li key={page}>
            <button
              onClick={onClickItem}
              className={`${styles.page} ${
                currentPage === page ? styles.current : ''
              }`}
              type="button"
              value={page}
              aria-current={currentPage === page}
              aria-label={`${page} 페이지`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            className={styles.rotateArrow}
            onClick={onClickNext}
            disabled={isLastPage}
            aria-label="다음 페이지"
          >
            {arrow}
          </button>
        </li>
      </ul>
    </nav>
  );
}
