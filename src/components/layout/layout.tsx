import { PropsWithChildren } from 'react';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import styles from './layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};
