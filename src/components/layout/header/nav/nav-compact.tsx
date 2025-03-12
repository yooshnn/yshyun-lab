'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components';
import { sitemap } from '../../config';
import { Portal } from '../portal/portal';
import styles from './nav-compact.module.scss';

export const NavCompact = () => {
  const [show, setShow] = React.useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  return (
    <div className={styles.trigger}>
      <Button
        onClick={open}
        variant="ghost"
        className={styles.button}
        aria-label="navigation menu"
      >
        <MenuIcon />
      </Button>
      <Portal>{show && <Content close={close} />}</Portal>
    </div>
  );
};

const Content = ({ close }: { close: () => void }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  return (
    <div
      className={styles.wrapper}
      role="dialog"
      aria-modal="true"
      id="mobile-menu"
    >
      <div className={styles.close}>
        <Button
          onClick={close}
          variant="ghost"
          className={styles.button}
          aria-label="Close navigation menu"
        >
          <XIcon />
        </Button>
      </div>
      <nav>
        {sitemap.map(({ category, sections }) => (
          <div key={`category:${category}`} className={styles.category}>
            <div className={styles.categoryTitle}>{category.toUpperCase()}</div>
            <div key={category} className={styles.sections}>
              {sections.map((section) => (
                <Link
                  className={styles.section}
                  href={`/${section}`}
                  key={`category:${category};section:${section}`}
                  onClick={close}
                >
                  {section}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};
