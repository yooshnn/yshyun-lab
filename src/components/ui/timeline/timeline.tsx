import clsx from 'clsx';
import React from 'react';
import styles from './timeline.module.scss';

interface WrapperProps extends React.PropsWithChildren {
  className?: string;
}

interface ItemProps extends React.PropsWithChildren {
  period: string;
  className?: string;
  content?: string[];
}

export const Timeline = ({ children, className }: WrapperProps) => (
  <ul className={clsx(styles.wrapper, className)}>{children}</ul>
);

export const TimelineItem = ({
  period,
  content,
  className,
  children,
}: ItemProps) => {
  return (
    <li className={clsx(styles.item, className)}>
      <div className={styles.period}>{period}</div>
      <div className={styles.content}>
        {children}
        {content &&
          content.map((i) => (
            <p key={i} className={styles.line}>
              {i}
            </p>
          ))}
      </div>
    </li>
  );
};
