import { Box, PageTitle, Wrapper } from '@/components';
import {
  Biography,
  Education,
  Experience,
  Profile,
} from '@/components/pages/professor';
import styles from './page.module.scss';

export default async function Page() {
  return (
    <>
      <PageTitle title="Professor" subtitle="PEOPLE" />
      <Wrapper className={styles.wrapper}>
        <Box className={styles.main}>
          <Profile />
          <Biography position="regular" />
          <Education />
          <Experience />
        </Box>
        <Biography position="side" />
      </Wrapper>
    </>
  );
}
