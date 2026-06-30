import clsx from 'clsx';
import styles from './Aside.module.css';
import type { ReactNode, Ref } from 'react';
import { Card } from '../Card';

interface Props {
  ref: Ref<HTMLElement>;
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

const Aside = ({ ref, children, className, isOpen }: Props) => {
  return (
    <aside
      ref={ref}
      className={clsx(styles.aside, { [styles.isOpen]: isOpen }, className)}
    >
      <Card className={styles.card}>{children}</Card>
    </aside>
  );
};

export { Aside };
