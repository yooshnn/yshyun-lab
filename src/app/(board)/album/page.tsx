import { PageTitle, Wrapper } from '@/components';
import { AlbumComponent } from '@/components/pages/album/album';
import { albumData } from './dummy';

export default async function Page() {
  return (
    <>
      <PageTitle title="Album" subtitle="BOARD" />
      <Wrapper>
        <AlbumComponent data={albumData} />
      </Wrapper>
    </>
  );
}
