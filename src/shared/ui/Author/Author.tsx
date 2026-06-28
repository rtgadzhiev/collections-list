import styles from './Author.module.css';
import Link from '../Link/Link';

interface Props {
  name: string;
}

const Author = ({ name }: Props) => {
  return <Link className={styles.author}>{name}</Link>;
};

export { Author };
