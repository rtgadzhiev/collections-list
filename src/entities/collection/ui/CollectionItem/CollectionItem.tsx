import styles from './CollectionItem.module.css';
import type { ICollection } from '../../model/types';
import { NavLink } from 'react-router';
import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Title';
import { Badge } from '@/shared/ui/Badge';
import { CollectionPreview } from '../CollectionPreview';
import image from '@/shared/assets/images/collection-item-image.jpg';
import starsIcon from '@/shared/assets/images/icons/stars-icon.svg';
import questionsIcon from '@/shared/assets/images/icons/questions-square-icon.svg';

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

const CollectionItem = ({
  keywords,
  id,
  imageSrc,
  title,
  isFree,
  questionsCount,
  specializations,
}: Props) => {
  return (
    <NavLink
      className={styles.link}
      to={{ pathname: String(id), search: `collection=${id}` }}
    >
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
                text={isFree ? 'Бесплатно' : 'Для участников'}
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

export { CollectionItem };
