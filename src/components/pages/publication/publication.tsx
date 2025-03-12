import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { TPublication } from '@/app/(research)/publication/types';
import { Link } from '@/components';
import styles from './publication.module.scss';
import { showYear } from './utils';

export const PublicationsComponent = ({
  data,
  isPreprint,
}: {
  data: TPublication[];
  isPreprint?: boolean;
}) => (
  <ul className={styles.wrapper}>
    {data.map(
      ({ uid, publishedAt, title, author, information, image, url }, index) => (
        <Publication
          key={`preprint:${uid}`}
          showYear={
            isPreprint ? false : showYear(data, index, publishedAt as string)
          }
          publishedAt={publishedAt}
          title={title}
          author={author}
          information={information}
          image={image}
          url={url}
        />
      )
    )}
  </ul>
);

export const Publication = ({
  publishedAt,
  showYear,
  title,
  author,
  information,
  image,
  url,
}: Omit<TPublication, 'uid'>) => {
  const year = publishedAt ? new Date(publishedAt).getFullYear() : ' ';

  return (
    <li className={styles.container}>
      <span
        className={clsx(
          styles.year,
          showYear === undefined ? styles.invalid : undefined,
          showYear === false ? styles.hidden : undefined
        )}
      >
        {year}
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
