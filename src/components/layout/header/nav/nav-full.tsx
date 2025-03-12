import clsx from 'clsx';
import Link from 'next/link';
import { sitemap } from '../../config';
import styles from './nav-full.module.scss';

interface Props {
  hidden: boolean;
  animate: boolean;
  show: () => void;
  hide: () => void;
}

export const NavFull = ({ hidden, animate, show, hide }: Props) => (
  <nav
    className={styles.navbar}
    onFocus={show}
    onBlur={hide}
    onMouseEnter={show}
    onMouseLeave={hide}
  >
    {sitemap.map(({ category, sections }) => (
      <div key={`category:${category}`} className={styles.category}>
        <button>{category.toUpperCase()}</button>
        <div
          className={clsx(
            styles.sections,
            hidden && styles.hidden,
            animate && styles.animate
          )}
        >
          {sections.map((section) => (
            <Link
              href={`/${section}`}
              key={`category:${category};section:${section}`}
              className={styles.section}
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </nav>
);
