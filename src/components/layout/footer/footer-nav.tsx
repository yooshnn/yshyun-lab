import Link from 'next/link';
import { sitemap } from '../config';
import styles from './footer-nav.module.scss';

export const FooterNav = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      {sitemap.map(({ category, sections }) => (
        <div key={`footer/category:${category}`} className={styles.column}>
          <h3 className={styles.category}>{category.toUpperCase()}</h3>
          <ul className={styles.list}>
            {sections.map((section) => (
              <li
                key={`footer/category:${category};section:${section}`}
                className={styles.item}
              >
                <Link href={`/${section}`}>{section}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
