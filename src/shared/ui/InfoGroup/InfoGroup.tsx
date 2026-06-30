import type { ReactNode } from 'react';
import styles from './InfoGroup.module.css';

interface Props {
  title: string;
  children: ReactNode;
}

const InfoGroup = ({ title, children }: Props) => {
  return (
    <div className={styles.group}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export { InfoGroup };
