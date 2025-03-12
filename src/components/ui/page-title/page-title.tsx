import styles from './page-title.module.scss';

interface Props {
  title: string;
  subtitle: string;
}

export const PageTitle = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
