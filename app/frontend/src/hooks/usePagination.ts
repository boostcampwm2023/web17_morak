import { useState } from 'react';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const onClickItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(e.currentTarget.value));
  };

  return { currentPage, onClickItem, onClickNext, onClickPrev };
};
