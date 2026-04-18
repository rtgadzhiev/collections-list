import clsx from 'clsx';
import styles from './Aside.module.css';
import Card from '../Card/Card';
import type { ReactNode, Ref } from 'react';

interface Props {
  ref: Ref<HTMLElement>;
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

function Aside({ ref, children, className, isOpen }: Props) {
  return (
    <aside
      ref={ref}
      className={clsx(styles.aside, { [styles.isOpen]: isOpen }, className)}
    >
      <Card className={styles.card}>{children}</Card>
    </aside>
  );
}

export default Aside;
