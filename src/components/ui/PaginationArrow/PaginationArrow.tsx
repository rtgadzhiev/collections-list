import Button from '../Button/Button';
import arrow from '../../../assets/images/icons/pagination/pagination-arrow.svg';
import clsx from 'clsx';
import styles from './PaginationArrow.module.css';
import type {
  IPaginationActions,
  TCurrentPage,
  TPaginationDirection,
  TTotalPages,
} from '../../../types/pagination';

interface Props extends Omit<Partial<IPaginationActions>, 'handlePageClick'> {
  direction: TPaginationDirection;
  currentPage: TCurrentPage;
  totalPages?: TTotalPages;
}

function PaginationArrow({
  direction,
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}: Props) {
  return (
    <Button
      onClick={direction === 'left' ? handlePreviousPage : handleNextPage}
      disabled={
        direction === 'left' ? currentPage === 1 : currentPage === totalPages
      }
    >
      <img
        className={clsx(styles.arrow, {
          [styles.rigth]: direction === 'right',
        })}
        src={arrow}
        alt={direction === 'left' ? 'Назад' : 'Вперед'}
        width="28"
        height="28"
      />
    </Button>
  );
}

export default PaginationArrow;
