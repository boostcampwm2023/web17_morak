import { useEffect, useState } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname: string, params: { page: string }) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` });
};

export const usePagination = () => {
  const location = useLocation();
  const navigationSearch = useNavigateSearch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    setCurrentPage(page ? Number(page) : 1);
    window.scrollTo({ top: 0 });
  }, [location]);

  const onClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const onClickItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.value;
    setCurrentPage(Number(page));
    navigationSearch('', { page });
  };

  return { currentPage, onClickItem, onClickNext, onClickPrev };
};
