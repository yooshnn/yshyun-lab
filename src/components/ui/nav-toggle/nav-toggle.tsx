'use client';

import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../button/button';
import styles from './nav-toggle.module.scss';

export const NavToggles = ({ children }: React.PropsWithChildren) => (
  <nav className={styles.toggleGroup}>{children}</nav>
);

interface ToggleProps {
  url: string;
  label: string;
  value?: string;
  paramKey: string;
  onClick?: (url: string) => void;
  fallback?: boolean;
}

export const NavToggle = ({
  url,
  label,
  value,
  paramKey,
  onClick,
  fallback,
}: ToggleProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isHighlighted =
    searchParams.get(paramKey) === value ||
    (fallback && searchParams.get(paramKey) === null);

  const handleClick = () => {
    if (onClick) {
      onClick(url);
    } else {
      router.push(url);
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className={clsx(styles.toggle, isHighlighted && styles.highlight)}
    >
      {label}
    </Button>
  );
};
