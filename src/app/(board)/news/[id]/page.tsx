import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PageTitle } from '@/components';
import { api } from '@/core/api';
import { TNews } from './types';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{
    id: number;
  }>;
}

const dummy = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

export default async function Page({ params }: Props) {
  // fetch data
  const id = (await params).id;

  const {
    data: { title, content, date },
  } = await api<{
    data: TNews;
  }>({ url: `board/news/${id}` });

  return (
    <>
      <div>
        <PageTitle title="News" subtitle="BOARD" />
        <h1>{title}</h1>
        <article className="markdown-body">
          <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {content.replaceAll('\\n', '\n')}
          </Markdown>
        </article>
      </div>
    </>
  );
}
