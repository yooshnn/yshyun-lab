import clsx from 'clsx';
import Image from 'next/image';
import { Email, Timeline, TimelineItem } from '@/components/ui';
import styles from './member.module.scss';

interface Props {
  name: string;
  alias: string | null;
  image: string | null;
  email: string;
  history: { period: string; information: string }[];
}

export const Member = ({ name, alias, image, email, history }: Props) => (
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
      <Timeline className={styles.timeline}>
        {history.map(({ period, information }) => (
          <TimelineItem
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
