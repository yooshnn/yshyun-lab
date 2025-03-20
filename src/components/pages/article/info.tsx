'use client';

import { LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui';
import styles from './article.module.scss';

const isToday = (date: Date) =>
  new Date().setHours(0, 0, 0, 0) === new Date(date).setHours(0, 0, 0, 0);

export const ArticleInfo = ({ date }: { date: string }) => {
  const href = typeof window === 'undefined' ? 'a' : window.location.href;
  const result = href.split(/[?#]/)[0];

  const dateObj = new Date(date);
  const dateStr = isToday(dateObj)
    ? `${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`
    : `${dateObj.getFullYear()}.${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getDate().toString().padStart(2, '0')}`;

  const copy = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div className={styles.info}>
      <div className={styles.date}>Published at {dateStr}</div>
      <Button
        className={styles.share}
        onClick={copy}
        variant="ghost"
        title="copy"
      >
        <LinkIcon size={16} />
      </Button>
    </div>
  );
};
