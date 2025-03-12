import clsx from 'clsx';
import { ExternalLinkIcon } from 'lucide-react';
import NLink from 'next/link';
import styles from './link.module.scss';

interface Props extends React.ComponentProps<typeof NLink> {
  unstyled?: boolean;
  external?: boolean;
  hideIcon?: boolean;
  icon?: React.ElementType;
}

export const Link = ({
  href,
  unstyled = false,
  external = false,
  hideIcon = false,
  icon: Icon,
  children,
  className,
  ...props
}: Props) => {
  const target = external ? '_blank' : undefined;
  const rel = external ? 'noopener noreferrer' : undefined;
  const cname = clsx(styles.link, !unstyled && styles.decorate, className);

  return (
    <NLink href={href} target={target} rel={rel} className={cname} {...props}>
      {children} {Icon && <Icon className={styles.icon} />}
      {!hideIcon && !Icon && external && (
        <ExternalLinkIcon className={styles.icon} />
      )}
    </NLink>
  );
};
