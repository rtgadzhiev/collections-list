import styles from './Keyword.module.css';

interface Props {
  title: string;
}

const Keyword = ({ title }: Props) => {
  return <span className={styles.keyword}>{`#${title}`}</span>;
};

export { Keyword };
