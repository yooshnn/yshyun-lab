import clsx from 'clsx';
import React from 'react';
import styles from './box.module.scss';

interface Props extends React.PropsWithChildren {
  direction?: 'x' | 'y';
  className?: string;
}

export const Box = ({ direction = 'y', className, children }: Props) => {
  return (
    <div
      className={clsx(
        styles.box,
        direction === 'x' ? styles.x : styles.y,
        className
      )}
    >
      {children}
    </div>
  );
};
