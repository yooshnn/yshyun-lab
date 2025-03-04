import Image from 'next/image';
import { Link } from '@/components/ui';
import { Logo } from '../logo';
import styles from './about.module.scss';

export const About = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
        <p>Artificial Intelligent, Deep Learning, Computer Vision.</p>
      </div>
      <Links />
    </div>
    <div className={styles.text}>
      <p>
        5N109, INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheon 22212, KOREA
      </p>
      <p>
        © Copyright 2025. Mathematical Intelligence Lab. All Rights Reserved.
      </p>
    </div>
  </div>
);

const Links = () => (
  <div className={styles.links}>
    <div className={styles.compact}>
      <Link href="https://www.inha.ac.kr" external>
        INHA University
      </Link>
      <Link href="https://math.inha.ac.kr/math/index.do" external>
        Dept. of Mathematics
      </Link>
    </div>
    <div className={styles.full}>
      <Link href="https://www.inha.ac.kr" external hideIcon>
        <Image
          src="/assets/inha-emblem.png"
          alt="Inha University"
          width={120}
          height={120}
        />
      </Link>
      <Link href="https://math.inha.ac.kr/math/index.do" external hideIcon>
        <Image
          src="/assets/inha-dept-of-math.webp"
          alt="Inha University"
          width={120}
          height={120}
        />
      </Link>
    </div>
  </div>
);
