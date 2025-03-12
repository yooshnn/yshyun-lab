import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Box } from '@/components/block';
import styles from './pagination.module.scss';

interface Props {
  baseUrl: string;
  page: {
    cur: number;
    last: number;
  };
}

export const Pagination = ({ baseUrl, page }: Props) => {
  return (
    <>
      <Compact baseUrl={baseUrl} page={page} />
      <Full baseUrl={baseUrl} page={page} />
    </>
  );
};

const Compact = ({ baseUrl, page }: Props) => {
  const showPrev = page.cur !== 1;
  const showNext = page.cur !== page.last;

  const prev = `${baseUrl}?page=${showPrev ? page.cur - 1 : page.cur}`;
  const next = `${baseUrl}?page=${showNext ? page.cur + 1 : page.cur}`;

  return (
    <Box direction="x" className={clsx(styles.btns, styles.compact)}>
      {!showPrev && (
        <div className={clsx(styles.navigator)}>
          <ChevronLeftIcon />
        </div>
      )}
      {showPrev && (
        <Link href={prev} className={clsx(styles.navigator, styles.active)}>
          <ChevronLeftIcon />
        </Link>
      )}
      <div className={styles.indicator}>
        <span>{page.cur}</span>
        <span>/</span>
        <span>{page.last}</span>
      </div>
      {!showNext && (
        <div className={clsx(styles.navigator)}>
          <ChevronRightIcon />
        </div>
      )}
      {showNext && (
        <Link href={next} className={clsx(styles.navigator, styles.active)}>
          <ChevronRightIcon />
        </Link>
      )}
    </Box>
  );
};

const Full = ({ baseUrl, page }: Props) => {
  const range = getRange(page.cur, page.last);

  const showPrev = range.length !== 0 && range[0] !== 1;
  const showNext = range.length !== 0 && range[range.length - 1] !== page.last;

  return (
    <Box direction="x" className={clsx(styles.btns, styles.full)}>
      {showPrev && (
        <Link
          href={`${baseUrl}?page=${range[0] - 1}`}
          className={clsx(styles.btn)}
        >
          <ChevronLeftIcon />
        </Link>
      )}
      {range.map((i) => (
        <Link
          key={`pagination;page=${i}`}
          href={`${baseUrl}?page=${i}`}
          className={clsx(styles.btn, i === page.cur && styles.active)}
        >
          {i}
        </Link>
      ))}
      {showNext && (
        <Link
          href={`${baseUrl}?page=${range[range.length - 1] + 1}`}
          className={clsx(styles.btn)}
        >
          <ChevronRightIcon />
        </Link>
      )}
    </Box>
  );
};

const getRange = (cur: number, last: number) => {
  const zCur = cur - 1;
  const zLast = last - 1;

  const start = zCur - (zCur % 10);

  return Array.from(
    { length: Math.min(10, zLast - start + 1) },
    (_, i) => start + i + 1
  );
};
