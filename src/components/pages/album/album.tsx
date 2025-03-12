'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './album.module.scss';
import { TAlbum } from './types';

export const AlbumComponent = ({ data }: { data: TAlbum[] }) => {
  if (data.length === 0) return <span>No posts with images were found.</span>;

  return (
    <Album>
      {data.map(({ uid, title, date, image, count }, index) => (
        <Photo
          key={`photo:${uid}`}
          uid={uid}
          title={title}
          date={date}
          image={image}
          count={count}
          label={index === 0 || compareDates(data[index - 1].date, date)}
        />
      ))}
    </Album>
  );
};

const Album = ({ children }: React.PropsWithChildren) => (
  <div className={styles.wrapper}>{children}</div>
);

const Photo = ({
  uid,
  label,
  title,
  date,
  image,
  count,
}: TAlbum & { label: boolean }) => {
  const dateObj = new Date(date);
  const yearStr = dateObj.getFullYear();
  const monthStr = months[dateObj.getMonth()];
  const dateStr = dateObj.getDate();

  return (
    <Link href={`/board/${uid}`}>
      <div className={styles.container}>
        <div className={styles.date}>
          {label && <span className={styles.year}>{yearStr}</span>}
          <span className={styles.date}>
            {monthStr}. {dateStr}
          </span>
          <sup>{nth(dateStr)}</sup>
        </div>

        <div className={styles.image}>
          <Image src={image} alt={title} fill />
          {count > 1 && <div className={styles.count}>{count}</div>}
        </div>
      </div>
    </Link>
  );
};

const compareDates = (prev: string, current: string) => {
  const prevDate = new Date(prev);
  const currentDate = new Date(current);
  return prevDate.getFullYear() !== currentDate.getFullYear();
};

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const nth = (day: number) => {
  if (day > 3 && day < 21) return 'th';
  const suffixes = ['th', 'st', 'nd', 'rd'];
  return suffixes[day % 10] || 'th';
};
