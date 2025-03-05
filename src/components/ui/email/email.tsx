'use client';

import clsx from 'clsx';
import React from 'react';
import styles from './email.module.scss';

interface Props {
  name: string;
  domain: string;
  className?: string;
}

export const Email = ({ name, domain, className }: Props) => {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    if (typeof document !== 'undefined') setContent(name + ' @ ' + domain);
  }, [domain, name]);

  if (!content) return <a>&nbsp;</a>;

  return (
    <a
      href={`mailto:${content.replace(/\s/g, '')}`}
      className={clsx(styles.email, className)}
    >
      {content}
    </a>
  );
};
