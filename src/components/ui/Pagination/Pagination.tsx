import Button from '../Button/Button';
import PaginationArrow from '../PaginationArrow/PaginationArrow';
import clsx from 'clsx';
import elipsis from '../../../assets/images/icons/pagination/pagination-ellipsis.svg';
import styles from './Pagination.module.css';
import type {
  IPaginationActions,
  TCurrentPage,
  TPaginationRange,
  TTotalPages,
} from '../../../types/pagination';

interface Props extends IPaginationActions {
  currentPage: TCurrentPage;
  totalPages: TTotalPages;
  paginationRange: TPaginationRange;
}

function Pagination({
  currentPage,
  totalPages,
  paginationRange,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
}: Props) {
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
}

export default Pagination;
