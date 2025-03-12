import { PageTitle } from '@/components';
import { NewsComponent } from '@/components/pages/news/news';
import { data } from './dummy';

interface Props {
  searchParams: {
    page: number;
  };
}

export default async function Page({ searchParams }: Props) {
  const size = 20;

  const page = {
    cur: Number(searchParams.page ?? 1),
    last: Math.floor((data.length - 1) / size) + 1,
  };

  page.cur = Math.max(Math.min(page.cur, page.last), 1);

  const paginatedData = data.slice(page.cur * size - size, page.cur * size);

  return (
    <>
      <PageTitle title="News" subtitle="BOARD" />
      <NewsComponent
        headline={data.slice(0, 5)}
        data={paginatedData}
        page={page}
      />
    </>
  );
}
