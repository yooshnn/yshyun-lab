import clsx from 'clsx';
import styles from './typography.module.scss';

interface Props {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  as: Component = 'p',
  className,
  children,
  ...props
}: Props) => {
  return (
    <Component className={clsx(styles.text, className)} {...props}>
      {children}
    </Component>
  );
};
