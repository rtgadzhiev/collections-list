import styles from './Badge.module.css';

interface Props {
  text: string;
}

const Badge = ({ text }: Props) => {
  return <div className={styles.badge}>{text}</div>;
};

export { Badge };
