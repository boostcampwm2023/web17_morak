import { ReactComponent as Arrow } from '@/assets/icons/arrow_left.svg';
import { vars } from '@/styles';
import { createRangeArray, get10UnitRange } from '@/utils';

import * as styles from './index.css';

type PaginationProps = {
  currentPage: number;
  onClickPrev: () => void;
  onClickNext: () => void;
};

export function Pagination({
  currentPage,
  onClickPrev,
  onClickNext,
}: PaginationProps) {
  const [start, end] = get10UnitRange(currentPage);
  const array = createRangeArray(start, end);

  return (
    <div className={styles.container}>
      <button type="button" onClick={onClickPrev}>
        <Arrow width={16} fill={vars.color.grayscale200} />
      </button>
      {array.map((page) => (
        <button
          className={`${styles.page} ${
            currentPage === page ? styles.current : ''
          }`}
          type="button"
          key={page}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={styles.rotateArrow}
        onClick={onClickNext}
      >
        <Arrow width={16} fill={vars.color.grayscale200} />
      </button>
    </div>
  );
}
