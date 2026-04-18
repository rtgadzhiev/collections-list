import styles from './CollectionItem.module.css';
import image from '../../assets/images/collection-item-image.jpg';
import { Badge } from '../ui/Badge/Badge';
import Card from '../ui/Card/Card';
import Title from '../ui/Title/Title';
import type { ICollection } from '../../types/api';
import { CollectionPreview } from '../CollectionPreview/CollectionPreview';
import starsIcon from '../../assets/images/icons/stars-icon.svg';
import questionsIcon from '../../assets/images/icons/questions-square-icon.svg';
import { NavLink } from 'react-router';

interface Props extends Pick<
  ICollection,
  | 'keywords'
  | 'imageSrc'
  | 'title'
  | 'isFree'
  | 'questionsCount'
  | 'specializations'
  | 'id'
> {}

export const CollectionItem = ({
  keywords,
  id,
  imageSrc,
  title,
  isFree,
  questionsCount,
  specializations,
}: Props) => {
  return (
    <NavLink className={styles.link} to={`${id}`}>
      <Card className={styles.card} isShadow={true}>
        <div className={styles.item}>
          <img
            className={styles.image}
            src={imageSrc || image}
            alt=""
            width="157"
            height="157"
          />
          <div>
            <div className={styles.keywords}>
              {keywords.map((keyword: string) => (
                <Badge key={keyword} text={keyword} />
              ))}
            </div>
            <Title className={styles.title} type="h2">
              {title}
            </Title>
            <div className={styles.preview}>
              <CollectionPreview
                text={isFree ? 'Бесплатно' : 'Для участников'}
                icon={starsIcon}
              />
              <CollectionPreview text={questionsCount} icon={questionsIcon} />
            </div>
            <ul className={styles.specializations}>
              {specializations.map((specialization) => (
                <li
                  key={specialization.title}
                  className={styles.specialization}
                >
                  {specialization.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </NavLink>
  );
};
