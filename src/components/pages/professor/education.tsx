import { Box, Typography } from '@/components/block';
import { Timeline, TimelineItem } from '@/components/ui';
import { experience } from './config';
import styles from './education.module.scss';

export const Experience = () => (
  <Box>
    <Typography as="h3">Professional Experience</Typography>
    <Timeline>
      {experience.map(({ period, title, description }) => (
        <TimelineItem key={title} period={period} className={styles.content}>
          <h4>{title}</h4>
          <p>{description}</p>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);
