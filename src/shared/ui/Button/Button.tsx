import clsx from 'clsx';
import styles from './Button.module.css';
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import { NavLink } from 'react-router';

type BaseProps = {
  variant?: 'default' | 'primary';
  className?: string;
  children: ReactNode;
  title?: string;
};

type ButtonAsButton = BaseProps & {
  isLink?: false;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps | 'isLink'>;

type ButtonAsNavLink = BaseProps & {
  isLink: true;
  to: string;
} & Omit<
    ComponentPropsWithoutRef<typeof NavLink>,
    keyof BaseProps | 'isLink' | 'to'
  >;

type Props = ButtonAsButton | ButtonAsNavLink;

const Button = forwardRef<HTMLElement, Props>((props, ref) => {
  const {
    isLink = false,
    variant = 'default',
    className,
    children,
    title,
    ...rest
  } = props;

  if (isLink) {
    const { to, ...navLinkRest } = rest as ButtonAsNavLink;
    return (
      <NavLink
        {...navLinkRest}
        to={to}
        ref={ref as any}
        className={clsx(
          styles.button,
          { [styles.primary]: variant === 'primary' },
          className,
        )}
      >
        {children}
      </NavLink>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonAsButton;
  return (
    <button
      {...buttonRest}
      type={type}
      ref={ref as any}
      className={clsx(
        styles.button,
        { [styles.primary]: variant === 'primary' },
        className,
      )}
      title={title}
      aria-label={title}
    >
      {children}
    </button>
  );
});

export { Button };
