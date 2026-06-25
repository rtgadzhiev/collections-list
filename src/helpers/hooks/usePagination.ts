import { LIMIT } from '../../constants/api';
import type {
  IUsePagination,
  TCurrentPage,
  TPaginationRange,
} from '../../types/pagination';
import getPaginationRange from '../getPaginationRange';
import { useMemo } from 'react';

function usePagination(
  currentPage: TCurrentPage,
  totalQuestions: number = 1,
  limit: number = LIMIT,
): IUsePagination {
  const getTotalPages = (totalQuestions: number, limit: number): number => {
    return Math.ceil(totalQuestions / limit);
  };

  const totalPages = useMemo<number>(() => {
    if (!totalQuestions) return 1;

    return getTotalPages(totalQuestions, limit);
  }, [totalQuestions, limit]);

  const paginationRange = useMemo<TPaginationRange>(() => {
    return getPaginationRange(currentPage, totalPages);
  }, [currentPage, totalPages]);

  return { currentPage, totalPages, paginationRange };
}

export default usePagination;
