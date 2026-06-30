import clsx from 'clsx';
import styles from './Dropdown.module.css';
import type { MouseEventHandler, ReactNode } from 'react';
import type { Position } from '../hooks/useDropdownPosition';
import { Button } from '@/shared/ui/Button';

interface Props {
  className?: string;
  trigger: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  onToggle: MouseEventHandler<HTMLButtonElement>;
  ref: any;
  isMobile?: boolean;
  position: Position | null;
  tabIndex?: number;
}

const Dropdown = (props: Props) => {
  const {
    className,
    trigger,
    content,
    isOpen,
    onToggle,
    ref,
    isMobile = false,
    position,
    tabIndex,
  } = props;

  return (
    <div className={clsx(styles.dropdown, className)}>
      <Button
        ref={ref}
        className={clsx(styles.dropdownButton, {
          [styles.isMobile]: isMobile,
        })}
        onClick={onToggle}
        tabIndex={tabIndex}
      >
        {trigger}
      </Button>
      <div
        className={clsx(styles.dropdownContent, {
          [styles.isOpen]: isOpen,
          [styles.isMobile]: isMobile,
          [styles.left]: position === 'left',
          [styles.right]: position === 'right',
        })}
      >
        {content}
      </div>
    </div>
  );
};

export { Dropdown };
