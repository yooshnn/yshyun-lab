import { About } from './about';
// import { FooterNav } from './footer-nav';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <FooterNav /> */}
      <About />
    </footer>
  );
};
