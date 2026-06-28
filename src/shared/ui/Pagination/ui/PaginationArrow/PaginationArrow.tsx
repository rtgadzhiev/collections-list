import arrow from '../../icons/pagination-arrow.svg';
import clsx from 'clsx';
import styles from './PaginationArrow.module.css';
import type {
  IPaginationActions,
  TCurrentPage,
  TPaginationDirection,
  TTotalPages,
} from '../../types';
import { Button } from '@/shared/ui/Button';

interface Props extends Omit<Partial<IPaginationActions>, 'handlePageClick'> {
  direction: TPaginationDirection;
  currentPage: TCurrentPage;
  totalPages?: TTotalPages;
}

const PaginationArrow = ({
  direction,
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}: Props) => {
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
};

export { PaginationArrow };
