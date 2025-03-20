'use client';

import clsx from 'clsx';
import React from 'react';
import styles from './phone.module.scss';

interface Props {
  data: string[];
  className?: string;
}

export const Phone = ({ data, className }: Props) => {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    if (typeof document !== 'undefined') setContent(data.join('-'));
  }, [data]);

  if (!content) return <a>&nbsp;</a>;

  return <span className={clsx(styles.email, className)}>{content}</span>;
};
