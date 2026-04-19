import styles from './Keyword.module.css';

interface Props {
  title: string;
}

function Keyword({ title }: Props) {
  return <span className={styles.keyword}>{`#${title}`}</span>;
}

export default Keyword;
