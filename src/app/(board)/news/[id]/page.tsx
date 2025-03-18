import { PageTitle } from '@/components';
import { api } from '@/core/api';

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

  const { data } = await api<{
    data: TBoard[];
  }>({ url: 'board/headline' });

  return (
    <div>
      <textarea value={data} cols={40} rows={40} />
    </div>
  );
}
