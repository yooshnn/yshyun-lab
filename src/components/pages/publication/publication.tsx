import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { Link } from '@/components';
import styles from './publication.module.scss';

interface WrapperProps extends React.PropsWithChildren {
  title?: string;
}

export const Publications = ({ children }: WrapperProps) => (
  <ul className={styles.wrapper}>{children}</ul>
);

interface ItemProps {
  publishedAt: Date | null;
  showYear?: boolean;
  title: string;
  author: string;
  information: string;
  image: string | null;
  url: string | null;
}

export const Publication = ({
  publishedAt,
  showYear,
  title,
  author,
  information,
  image,
  url,
}: ItemProps) => {
  return (
    <li className={styles.container}>
      <span
        className={clsx(
          styles.year,
          showYear === undefined ? styles.invalid : undefined,
          showYear === false ? styles.hidden : undefined
        )}
      >
        {publishedAt?.getFullYear() ?? ' '}
      </span>
      {image && (
        <div className={clsx(styles.image, !image ? styles.hidden : undefined)}>
          <Link href={image} external unstyled hideIcon>
            <Image
              fill
              src={image}
              alt={`Thumbnail of publication (${title})`}
            />
          </Link>
        </div>
      )}
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.author}>{author}</span>
        <span className={styles.information}>{information}</span>
        {url && (
          <Link className={styles.link} href={url} external>
            read
          </Link>
        )}
      </div>
    </li>
  );
};
