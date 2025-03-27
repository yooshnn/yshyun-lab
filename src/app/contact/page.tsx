import {
  Email,
  Link,
  PageTitle,
  Phone,
  Typography,
  Wrapper,
} from '@/components';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <>
      <PageTitle title="Contact" subtitle="" />
      <Wrapper className={styles.container}>
        <div className={styles.sections}>
          <section>
            <Typography as="h3">Laboratory</Typography>
            <Typography as="p">
              <Link href="/">
                Artificial Intelligence Lab : Inha University
              </Link>
            </Typography>
            <Typography as="p">
              <strong>Location ― </strong>
              <br />
              5N212, INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheon 22212,
              KOREA
            </Typography>
            <Typography as="p">
              <strong>Phone ― </strong>
              <Phone data={['032', '860', '7629']} />
            </Typography>
            <Typography as="p">
              <strong>Email ― </strong>
              <Email name="labstaff" domain="inha.ac.kr" />
            </Typography>
          </section>

          {/* 교수님 정보 */}
          <section>
            <Typography as="h3">Professor</Typography>
            <Typography as="p">
              <Link href="/professor">Prof. Yoonsuk Hyun.</Link>
            </Typography>
            <Typography as="p">
              <strong>Location ― </strong>
              <br />
              5N212, INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheon 22212,
              KOREA
            </Typography>
            <Typography as="p">
              <strong>Email ― </strong>
              <Email name="yshyun21" domain="inha.ac.kr" />
            </Typography>
          </section>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.4028290848887!2d126.65059081189521!3d37.45120977195225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b79aac8b45243%3A0xb3243f2853647b98!2z7J247ZWY64yA7ZWZ6rWQIDXtmLjqtIA!5e0!3m2!1sko!2skr!4v1743051880172!5m2!1sko!2skr"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Wrapper>
    </>
  );
}
