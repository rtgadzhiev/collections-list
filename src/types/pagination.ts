import type { MouseEventHandler } from 'react';

export interface IPaginationActions {
  handlePreviousPage: MouseEventHandler<HTMLButtonElement>;
  handleNextPage: MouseEventHandler<HTMLButtonElement>;
  handlePageClick: (page: number) => void;
}

export type TTotalPages = number;
export type TCurrentPage = number;
export type TPaginationRangeItem = number | null;
export type TPaginationRange = TPaginationRangeItem[];
export type TPaginationType = 'short' | 'start' | 'middle' | 'end';
export type TPaginationDirection = 'left' | 'right';

export interface IUsePagination {
  currentPage: TCurrentPage;
  totalPages: TTotalPages;
  paginationRange: TPaginationRange;
}
