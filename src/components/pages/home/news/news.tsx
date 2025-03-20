import { Typography } from '@/components/block';
import styles from './news.module.scss';

export const News = ({ date, title }: { date: string; title: string }) => {
  const dateObj = new Date(date);
  const dateStr = isToday(dateObj)
    ? `${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`
    : `${dateObj.getFullYear()}.${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getDate().toString().padStart(2, '0')}`;

  return (
    <div className={styles.container}>
      <Typography as="p">{dateStr}</Typography>
      <Typography as="p">{title}</Typography>
    </div>
  );
};

const isToday = (date: Date) =>
  new Date().setHours(0, 0, 0, 0) === new Date(date).setHours(0, 0, 0, 0);
