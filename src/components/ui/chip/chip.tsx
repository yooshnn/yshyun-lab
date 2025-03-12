import clsx from 'clsx';
import React from 'react';
import styles from './chip.module.scss';

interface Props {
  icon?: React.ElementType;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Chip = ({ icon: Icon, label, onClick, className }: Props) => {
  return (
    <div
      className={clsx(
        styles.chip,
        { [styles.clickable]: onClick },
        Icon ? styles.withIcon : undefined,
        className
      )}
      onClick={onClick}
    >
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.label}>{label}</span>
    </div>
  );
};
