import clsx from 'clsx';
import { Box, Typography } from '@/components';
import { biography } from '../config';
import styles from './biography.module.scss';

interface Props {
  position: 'regular' | 'side';
}

export const Biography = ({ position }: Props) => (
  <Box className={clsx(styles.biography, styles[position])}>
    <Typography as="h3">Biography</Typography>
    {biography.map((i) => (
      <Typography as="p" key={i}>
        {i}
      </Typography>
    ))}
  </Box>
);
