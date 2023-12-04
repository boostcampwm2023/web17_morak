import { ReactComponent as Arrow } from '@/assets/icons/arrow_left.svg';
import { vars } from '@/styles';
import { createRangeArray, get10UnitRange } from '@/utils';

import * as styles from './index.css';

const { grayscale200 } = vars.color;
type PaginationProps = {
  currentPage: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickItem: React.MouseEventHandler<HTMLButtonElement>;
};

export function Pagination({
  currentPage,
  onClickPrev,
  onClickNext,
  onClickItem,
}: PaginationProps) {
  const [start, end] = get10UnitRange(currentPage);
  const array = createRangeArray(start, end);
  const arrow = <Arrow width={16} height={16} fill={grayscale200} />;
  return (
    <div className={styles.container}>
      <button type="button" onClick={onClickPrev}>
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
      >
        {arrow}
      </button>
    </div>
  );
}
