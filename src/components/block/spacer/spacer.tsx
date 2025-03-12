import clsx from 'clsx';
import styles from './spacer.module.scss';

interface Props {
  direction?: 'x' | 'y';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Spacer = ({ direction = 'y', size = 'md' }: Props) => (
  <div className={clsx(styles[direction], styles[size])} aria-hidden>
    &nbsp;
  </div>
);
