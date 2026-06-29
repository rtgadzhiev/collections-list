import clsx from 'clsx';
import styles from './Button.module.css';
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import { NavLink } from 'react-router';

type BaseButtonProps = {
  variant?: 'default' | 'primary';
  className?: string;
  children?: ReactNode;
  title?: string;
};

type ButtonAsButton = BaseButtonProps & {
  isLink?: false;
} & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseButtonProps | 'isLink'
  >;

type ButtonAsNavLink = BaseButtonProps & {
  isLink: true;
  to: string;
} & Omit<
    ComponentPropsWithoutRef<typeof NavLink>,
    keyof BaseButtonProps | 'isLink' | 'to'
  >;

type ButtonProps = ButtonAsButton | ButtonAsNavLink;

const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
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

export { Button, type ButtonProps };
