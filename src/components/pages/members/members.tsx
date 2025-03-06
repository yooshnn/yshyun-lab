import clsx from 'clsx';
import Image from 'next/image';
import {
  Email,
  Spacer,
  Timeline,
  TimelineItem,
  Typography,
} from '@/components';
import styles from './members.module.scss';

interface WrapperProps extends React.PropsWithChildren {
  title: string;
}

export const Members = ({ title, children }: WrapperProps) => (
  <div className={styles.wrapper}>
    <Typography as="h2">{title}</Typography>
    <ul>{children}</ul>
  </div>
);

interface ItemProps {
  name: string;
  alias: string | null;
  image: string | null;
  email: string;
  history: { period: string; information: string }[];
}

export const MembersItem = ({
  name,
  alias,
  image,
  email,
  history,
}: ItemProps) => (
  <li className={styles.container}>
    <div
      className={clsx(styles.photograph, !image ? styles.hidden : undefined)}
    >
      {image && <Image fill src={image} alt={`Photograph of ${name}`} />}
    </div>
    <div className={styles.content}>
      <div className={styles.name}>
        <span>{name}</span>
        <span>{alias}</span>
      </div>
      <Email name={email.split('@')[0]} domain={email.split('@')[1]} />
      <Spacer />
      <Timeline gap="md" className={styles.timeline}>
        {history.map(({ period, information }) => (
          <TimelineItem
            size="md"
            key={information}
            period={period}
            content={[information]}
            className={styles.item}
          />
        ))}
      </Timeline>
    </div>
  </li>
);
