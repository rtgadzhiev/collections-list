import clsx from 'clsx';
import styles from './AccordionBody.module.css';
import useHeightObserver from '../../heplers/hooks/useHeightObserver';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

function AccordionBody({ children, isOpen }: Props) {
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
}

export default AccordionBody;
