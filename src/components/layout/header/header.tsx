'use client';

import clsx from 'clsx';
import React from 'react';
import { Logo } from '../logo';
import styles from './header.module.scss';
import { NavCompact, NavFull } from './nav';

export const Header = () => {
  const [animate, setAnimate] = React.useState(false);
  const [hidden, setHidden] = React.useState(true);

  // actions

  const show = () => {
    setHidden(false);
    setAnimate(true);
  };

  const hide = () => {
    setHidden(true);
  };

  // jsx

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <NavFull hidden={hidden} animate={animate} hide={hide} show={show} />
        <NavCompact />
      </div>
      <div
        className={clsx(
          styles.sectionsBg,
          hidden && styles.hidden,
          animate && styles.animate
        )}
      />
    </header>
  );
};
