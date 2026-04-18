import styles from './Badge.module.css';

interface Props {
  text: string;
}

export const Badge = ({ text }: Props) => {
  return <div className={styles.badge}>{text}</div>;
};
