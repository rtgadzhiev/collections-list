import clsx from 'clsx';
import styles from './Grid.module.css';
import type { JSX, ReactNode } from 'react';

interface Props {
  className: string;
  children: ReactNode;
}

function Grid({ className, children }: Props): JSX.Element {
  return <div className={clsx(styles.grid, className)}>{children}</div>;
}

export default Grid;
