import { PageTitle, Wrapper } from '@/components';
import { AlbumComponent } from '@/components/pages/album/album';
import { api } from '@/core/api';
import { TAlbum } from './types';

export default async function Page() {
  const { data } = await api<{
    data: TAlbum[];
  }>({ url: 'board/album' });

  return (
    <>
      <PageTitle title="Album" subtitle="BOARD" />
      <Wrapper>
        <AlbumComponent data={data} />
      </Wrapper>
    </>
  );
}
