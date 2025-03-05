import { Box, Typography } from '@/components/block';
import { Timeline, TimelineItem } from '@/components/ui';
import { education } from './config';
import styles from './experience.module.scss';

export const Education = () => (
  <Box>
    <Typography as="h3">Education</Typography>
    <Timeline>
      {education.map(({ period, title, description }) => (
        <TimelineItem key={title} period={period} className={styles.content}>
          <h4>{title}</h4>
          <p>{description}</p>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);
