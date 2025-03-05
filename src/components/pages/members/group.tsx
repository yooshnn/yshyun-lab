import { Typography } from '@/components/block';
import styles from './group.module.scss';

interface Props extends React.PropsWithChildren {
  title: string;
}

export const Group = ({ title, children }: Props) => (
  <div className={styles.group}>
    <Typography as="h3">{title}</Typography>
    <ul>{children}</ul>
  </div>
);
