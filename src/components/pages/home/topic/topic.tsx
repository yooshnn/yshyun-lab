import { Typography } from '@/components/block';
import styles from './topic.module.scss';

export const Topics = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export const Topic = ({
  title,
  index,
  children,
}: React.PropsWithChildren<{ title: string; index: number }>) => {
  return (
    <div className={styles.topic}>
      <span className={styles.index}>Research Topic #{index}</span>
      <Typography as="h2">{title}</Typography>
      {children}
    </div>
  );
};
