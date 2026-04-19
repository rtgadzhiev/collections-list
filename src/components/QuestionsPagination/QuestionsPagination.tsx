import Pagination from '../ui/Pagination/Pagination';
import { useSearchParams } from 'react-router';
import usePagination from '../../heplers/hooks/usePagination';
import useQuestions from '../../heplers/hooks/useQuestions';

function QuestionsPagination() {
  const { questions } = useQuestions();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { currentPage, totalPages, paginationRange } = usePagination(
    page,
    questions?.total,
  );

  const handleNextPage = () => {
    if (page < totalPages) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', String(page + 1));
      setSearchParams(newParams);
    }
  };
  const handlePreviousPage = () => {
    if (page > 1) {
      const newParams = new URLSearchParams(searchParams);
      if (page - 1 === 1) {
        newParams.delete('page');
      } else {
        newParams.set('page', String(page - 1));
      }
      setSearchParams(newParams);
    }
  };
  const handlePageClick = (pageNumber: number) => {
    const newParams = new URLSearchParams(searchParams);
    if (pageNumber === 1) {
      newParams.delete('page');
    } else {
      newParams.set('page', String(pageNumber));
    }
    setSearchParams(newParams);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      paginationRange={paginationRange}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
    />
  );
}

export default QuestionsPagination;
