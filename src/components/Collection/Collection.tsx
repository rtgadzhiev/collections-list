import styles from './Collection.module.css';
import Card from '../ui/Card/Card';
import image from '../../assets/images/collection-item-image.jpg';
import Title from '../ui/Title/Title';
import { useParams } from 'react-router';
import useFetch from '../../heplers/hooks/useFetch';
import { getPublicCollectionById } from '../../api/apiQuestions';

export const Collection = () => {
  const { collectionId } = useParams();
  const [collection] = useFetch(getPublicCollectionById, collectionId);

  return (
    <Card className={styles.card} isShadow={true}>
      <img
        className={styles.image}
        src={image}
        alt=""
        width="157"
        height="157"
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{collection?.title}</h1>
        <p className={styles.description}>{collection?.description}</p>
      </div>
    </Card>
  );
};
