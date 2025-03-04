import clsx from 'clsx';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './portal.module.scss';

export const Portal = ({ children }: React.PropsWithChildren) => {
  const [isMounted, setIsMounted] = React.useState(false);

  const element =
    typeof window !== 'undefined' && document.querySelector('#overlay-root');

  React.useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      setIsMounted(true);

      if (!!children) lockBodyScroll();
      return () => {
        if (!!children) unlockBodyScroll();
      };
    }
  }, [children]);

  console.log(children);

  if (isMounted && element) {
    return ReactDOM.createPortal(
      <div className={clsx(styles.overlay, children && styles.open)}>
        {children}
      </div>,
      element
    );
  }

  return null;
};

const lockBodyScroll = () => {
  const scrollY = window.scrollY;
  document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
};

const unlockBodyScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.paddingRight = '0';
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};
