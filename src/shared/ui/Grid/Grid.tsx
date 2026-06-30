import clsx from 'clsx';
import styles from './Grid.module.css';
import type { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const Grid = ({ className, children }: Props) => {
  return <div className={clsx(styles.grid, className)}>{children}</div>;
};

export { Grid };
