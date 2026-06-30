import styles from './CollectionsList.module.css';
import { useSearchParams } from 'react-router';
import { CollectionItem, useGetCollectionsQuery } from '@/entities/collection';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Error } from '@/shared/ui/Error';

export const CollectionsList = () => {
  const [searchParams] = useSearchParams();
  const paramsString = searchParams.toString();

  const {
    data: collections,
    isLoading,
    isFetching,
    error,
  } = useGetCollectionsQuery(paramsString);

  return (
    <ul className={styles.list}>
      {isLoading || isFetching ? (
        <Skeleton className={styles.skeleton} count={10} />
      ) : error ? (
        <Error error={error} />
      ) : (
        collections?.data.map((collection) => (
          <CollectionItem
            key={collection.id}
            id={collection.id}
            title={collection.title}
            imageSrc={null}
            keywords={collection.keywords.slice(0, 5)}
            isFree={collection.isFree}
            questionsCount={collection.questionsCount}
            specializations={collection.specializations}
          />
        ))
      )}
    </ul>
  );
};
