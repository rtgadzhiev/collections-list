import clsx from 'clsx';
import styles from './AccordionTrigger.module.css';
import type { ReactNode } from 'react';
import { Button } from '@/shared/ui/Button';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

const AccordionTrigger = ({ isOpen, onToggle, children }: Props) => {
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
};

export { AccordionTrigger };
