import clsx from 'clsx';
import styles from './Button.module.css';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, title, ...props }: Props, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(styles.button, className)}
        aria-label={title}
        title={title}
      >
        {children}
      </button>
    );
  },
);

export default Button;
