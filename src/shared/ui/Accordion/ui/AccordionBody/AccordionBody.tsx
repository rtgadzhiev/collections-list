import clsx from 'clsx';
import styles from './AccordionBody.module.css';
import type { ReactNode } from 'react';
import { useHeightObserver } from '@/shared/lib';

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

const AccordionBody = ({ children, isOpen }: Props) => {
  const { contentRef, height } = useHeightObserver();

  return (
    <div
      className={clsx(styles.collapse)}
      style={{
        height: isOpen ? height : '0px',
      }}
    >
      <div ref={contentRef} className={styles.body}>
        {children}
      </div>
    </div>
  );
};

export { AccordionBody };
