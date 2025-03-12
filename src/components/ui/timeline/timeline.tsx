import clsx from 'clsx';
import React from 'react';
import styles from './timeline.module.scss';

interface WrapperProps extends React.PropsWithChildren {
  gap?: 'md' | 'lg';
  className?: string;
}

interface ItemProps extends React.PropsWithChildren {
  size?: 'md' | 'lg';
  period: string;
  className?: string;
  content?: string[];
}

export const Timeline = ({ children, gap = 'lg', className }: WrapperProps) => (
  <ul className={clsx(styles.wrapper, styles[`gap-${gap}`], className)}>
    {children}
  </ul>
);

export const TimelineItem = ({
  size = 'lg',
  period,
  content,
  className,
  children,
}: ItemProps) => {
  return (
    <li className={clsx(styles.item, styles[size], className)}>
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
