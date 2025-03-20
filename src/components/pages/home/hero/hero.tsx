import { Typography, Wrapper } from '@/components/block';
import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <Wrapper>
          <Typography as="h1">Mathematical Intelligence Lab.</Typography>
          <Typography as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Wrapper>
      </div>
    </>
  );
};
