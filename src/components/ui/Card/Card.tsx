import clsx from 'clsx';
import styles from './Card.module.css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  isShadow?: boolean;
}

function Card({ className, children, isShadow = false }: Props) {
  return (
    <div
      className={clsx(styles.card, { [styles.shadow]: isShadow }, className)}
    >
      {children}
    </div>
  );
}

export default Card;
