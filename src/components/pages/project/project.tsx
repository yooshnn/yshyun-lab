import clsx from 'clsx';
import React from 'react';
import { Link } from '@/components';
import styles from './project.module.scss';

interface WrapperProps extends React.PropsWithChildren {
  title?: string;
}

export const Projects = ({ children }: WrapperProps) => (
  <ul className={styles.wrapper}>{children}</ul>
);

interface ItemProps {
  title: string;
  organization: string;
  ongoing: number;
  period: string;
  information: string;
  article: { title: string; url: string }[];
}

export const Project = ({
  title,
  organization,
  ongoing,
  period,
  information,
  article,
}: ItemProps) => {
  return (
    <li className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.organization}>{organization}</span>
      <div className={styles.ongoing}>
        <div
          className={clsx(
            styles.status,
            ongoing ? styles.ongoing : styles.finished
          )}
        >
          <div className={styles.circle} />
          <span>{ongoing ? 'ONGOING' : 'FINISHED'}</span>
        </div>
        <span className={styles.period}>{period}</span>
      </div>
      <p className={styles.information}>{information}</p>
      <ul className={styles.article}>
        {article.map(({ title, url }, index) => (
          <li key={`article;url:${url};index:${index}`}>
            <Link href={url} external>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
