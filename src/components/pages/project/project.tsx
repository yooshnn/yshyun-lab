import clsx from 'clsx';
import { RefreshCwIcon } from 'lucide-react';
import React from 'react';
import { TProject } from '@/app/project/types';
import { Link } from '@/components';
import styles from './project.module.scss';

export const ProjectsComponent = ({ projects }: { projects: TProject[] }) => (
  <ul className={styles.wrapper}>
    {projects.length === 0 && (
      <div>
        <span>No matching items were found.</span>&nbsp;
        <Link icon={RefreshCwIcon} href="/project">
          reset filters
        </Link>
      </div>
    )}
    {projects.map(
      ({ uid, title, organization, ongoing, period, information, article }) => (
        <Project
          key={`project:${uid}`}
          title={title}
          organization={organization}
          ongoing={ongoing}
          period={period}
          information={information}
          article={article}
        />
      )
    )}
  </ul>
);

export const Project = ({
  title,
  organization,
  ongoing,
  period,
  information,
  article,
}: Omit<TProject, 'uid'>) => {
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
