import clsx from 'clsx';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './article.module.scss';
import { ArticleInfo } from './info';

export const Article = ({
  title,
  content,
  date,
}: {
  title: string;
  content: string;
  date: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>{title}</h1>
        <ArticleInfo date={date} />
      </div>
      <div className={clsx('markdown-body', styles.content)}>
        <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {content.replaceAll('\\n', '\n')}
        </Markdown>
      </div>
    </div>
  );
};
