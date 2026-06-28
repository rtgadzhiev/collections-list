import styles from './InfoItem.module.css';

interface Props {
  title?: string | number;
}

const InfoItem = ({ title }: Props) => {
  return (
    <div className={styles.info}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export { InfoItem };
