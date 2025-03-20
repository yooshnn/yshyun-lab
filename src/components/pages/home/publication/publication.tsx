import { Typography } from '@/components/block';
import styles from './publication.module.scss';

export const Publication = ({
  title,
  author,
}: {
  title: string;
  author: string;
}) => (
  <div className={styles.container}>
    <Typography as="p">{title}</Typography>
    <Typography as="p">{author}</Typography>
  </div>
);
