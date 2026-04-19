import Button from '../ui/Button/Button';
import clsx from 'clsx';
import styles from './AccordionTrigger.module.css';
import type { ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

function AccordionTrigger({ isOpen, onToggle, children }: Props) {
  return (
    <Button
      className={clsx(styles.button, {
        [styles.isOpen]: isOpen,
      })}
      onClick={onToggle}
    >
      {children}
    </Button>
  );
}

export default AccordionTrigger;
