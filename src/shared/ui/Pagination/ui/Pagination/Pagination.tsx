import styles from './Pagination.module.css';
import clsx from 'clsx';
import elipsis from '../../icons/pagination-ellipsis.svg';
import type {
  IPaginationActions,
  TCurrentPage,
  TTotalPages,
  TPaginationRange,
} from '../../types';
import { PaginationArrow } from '../PaginationArrow';
import { Button } from '@/shared/ui/Button';

interface Props extends IPaginationActions {
  currentPage: TCurrentPage;
  totalPages: TTotalPages;
  paginationRange: TPaginationRange;
}

const Pagination = ({
  currentPage,
  totalPages,
  paginationRange,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
}: Props) => {
  return (
    <div className={styles.pagination}>
      <PaginationArrow
        direction="left"
        handlePreviousPage={handlePreviousPage}
        currentPage={currentPage}
      />
      {paginationRange?.length > 1 ? (
        paginationRange?.map((pageNumber, index) =>
          pageNumber ? (
            <Button
              key={index}
              onClick={() => handlePageClick(pageNumber)}
              className={clsx(styles.button, {
                [styles.isActive]: pageNumber === currentPage,
              })}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </Button>
          ) : (
            <img key={index} src={elipsis} alt="" width="8" height="2" />
          ),
        )
      ) : (
        <Button className={styles.isActive} disabled={true}>
          1
        </Button>
      )}
      <PaginationArrow
        direction="right"
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export { Pagination };
