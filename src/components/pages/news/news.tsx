import clsx from 'clsx';
import { PaperclipIcon } from 'lucide-react';
import Link from 'next/link';
import { Pagination, Wrapper } from '@/components';
import styles from './news.module.scss';
import { TNews } from './types';

export const NewsComponent = ({
  headline,
  data,
  page,
}: {
  headline: TNews[];
  data: TNews[];
  page: { cur: number; last: number };
}) => (
  <Wrapper className={styles.pageWrapper}>
    <NewsWrapper>
      <NewsHeader />
      {headline.map((i) => (
        <NewsItem key={i.uid} data={i} isHeadline={true} />
      ))}
      {data.map((i) => (
        <NewsItem key={i.uid} data={i} isHeadline={false} />
      ))}
    </NewsWrapper>
    <Pagination baseUrl="/news" page={page} />
  </Wrapper>
);

const NewsWrapper = ({ children }: React.PropsWithChildren) => (
  <section className={styles.wrapper}>
    <h2 className={styles.header} aria-hidden>
      News
    </h2>
    <ul className={styles.list}>{children}</ul>
  </section>
);

const NewsHeader = () => (
  <li className={styles.headerRow} role="row">
    <span className={styles.no} role="columnheader">
      #
    </span>
    <span className={styles.title} role="columnheader">
      Title
    </span>
    <span className={styles.date} role="columnheader">
      Date
    </span>
  </li>
);

const NewsItem = ({
  data,
  isHeadline,
}: {
  data: TNews;
  isHeadline: boolean;
}) => {
  const { uid, hasFile, title, date } = data;

  const dateObj = new Date(date);
  const dateStr = isToday(dateObj)
    ? `${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`
    : `${dateObj.getFullYear()}.${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getDate().toString().padStart(2, '0')}`;

  return (
    <li className={clsx(styles.item, isHeadline && styles.headline)} role="row">
      <Link href={`/news/${uid}`}>
        <span className={styles.no}>{isHeadline ? 'Notice' : uid}</span>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          {hasFile ? <PaperclipIcon className={styles.icon} /> : ''}
        </div>

        <time className={styles.date}>
          {isHeadline && <span className={styles.compactHeadline}>Notice</span>}
          {dateStr}
        </time>
      </Link>
    </li>
  );
};

const isToday = (date: Date) =>
  new Date().setHours(0, 0, 0, 0) === new Date(date).setHours(0, 0, 0, 0);
