import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './wrapper.module.scss';

interface Props extends PropsWithChildren {
  className?: string;
}

export const Wrapper = ({ children, className }: Props) => {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};
