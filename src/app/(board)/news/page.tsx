import { PageTitle } from '@/components';
import { NewsComponent } from '@/components/pages/news/news';
import { api } from '@/core/api';
import { TBoard } from './types';

export const dynamic = 'force-dynamic';

interface Props {
  searchParams: Promise<{
    page: number;
  }>;
}

// # of news per page
const size = 20;

export default async function Page({ searchParams }: Props) {
  // fetch data

  const { data: headline } = await api<{
    data: TBoard[];
  }>({ url: 'board/headline' });

  const { data: news } = await api<{
    data: TBoard[];
  }>({ url: 'board/news' });

  // calc pagination data

  const page = {
    cur: Number((await searchParams).page ?? 1),
    last: Math.floor((news.length - 1) / size) + 1,
  };

  page.cur = Math.max(Math.min(page.cur, page.last), 1);

  const paginatedData = news.slice(page.cur * size - size, page.cur * size);

  // return jsx

  return (
    <>
      <PageTitle title="News" subtitle="BOARD" />
      <NewsComponent headline={headline} data={paginatedData} page={page} />
    </>
  );
}
