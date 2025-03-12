import Image from 'next/image';
import { Spacer, Typography } from '@/components';
import styles from './research.module.scss';

interface Props extends React.PropsWithChildren {
  title: string;
  image?: string;
}

export const Research = ({ title, image, children }: Props) => (
  <div className={styles.research}>
    <Typography as="h2">{title}</Typography>
    {image && (
      <>
        <div className={styles.image}>
          <Image src={image} alt="" fill />
        </div>
        <Spacer size="md" />
      </>
    )}
    <div className={styles.content}>{children}</div>
  </div>
);
