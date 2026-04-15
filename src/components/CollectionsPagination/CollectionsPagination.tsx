import Pagination from '../ui/Pagination/Pagination';
import { useSearchParams } from 'react-router';
import useCollections from '../../heplers/hooks/useCollections';
import usePagination from '../../heplers/hooks/usePagination';

function CollectionsPagination() {
  const { collections } = useCollections();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const { currentPage, totalPages, paginationRange } = usePagination(
    page,
    collections?.total,
  );

  const handleNextPage = () => {
    if (page < totalPages) {
      console.log(page);
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', `${page + 1}`);
      setSearchParams(newParams);
    }
  };
  const handlePreviousPage = () => {
    if (page > 1) {
      const newParams = new URLSearchParams(searchParams);
      if (page - 1 === 1) {
        newParams.delete('page');
      } else {
        newParams.set('page', `${page - 1}`);
      }
      setSearchParams(newParams);
    }
  };
  const handlePageClick = (pageNumber: number) => {
    const newParams = new URLSearchParams(searchParams);
    if (pageNumber === 1) {
      newParams.delete('page');
    } else {
      newParams.set('page', `${pageNumber}`);
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

export default CollectionsPagination;
