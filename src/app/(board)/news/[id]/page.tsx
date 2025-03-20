import { Wrapper } from '@/components';
import { Article } from '@/components/pages/article/article';
import { api } from '@/core/api';
import { TArticle } from './types';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{
    id: number;
  }>;
}

export default async function Page({ params }: Props) {
  // fetch data
  const id = (await params).id;

  const {
    data: { title, content, date },
  } = await api<{
    data: TArticle;
  }>({ url: `board/news/${id}` });

  return (
    <Wrapper>
      <Article title={title} date={date} content={content} />
    </Wrapper>
  );
}
