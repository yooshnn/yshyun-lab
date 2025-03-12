import clsx from 'clsx';
import React from 'react';
import styles from './button.module.scss';

interface Props
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'children'> {
  variant?: 'outline' | 'ghost' | 'filled';
  rounded?: 'md' | 'sm' | 'full';
  icon?: React.ElementType;
  asChild?: boolean;
  children: string | React.ReactElement<Element>;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = 'outline',
      rounded = 'full',
      icon: Icon,
      asChild = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const cname = clsx(
      styles.button,
      styles[`button--variant-${variant}`],
      styles[`button--rounded-${rounded}`],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        className: clsx(cname, children.props.className),
      });
    }

    return (
      <button ref={ref} className={cname} {...props}>
        {children}
        {Icon && <Icon className={styles.icon} />}
      </button>
    );
  }
);

Button.displayName = 'Button';
