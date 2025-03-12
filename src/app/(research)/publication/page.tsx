import { PageTitle, Spacer, Typography, Wrapper } from '@/components';
import { PublicationsComponent } from '@/components/pages/publication';
import { api } from '@/core/api';
import { TPublication } from './types';

export default async function Page() {
  const { preprints, publications } = await api<{
    preprints: TPublication[];
    publications: TPublication[];
  }>({ url: 'publication' });

  return (
    <>
      <PageTitle title="Publication" subtitle="RESEARCH" />
      <Wrapper>
        {preprints.length > 0 && (
          <>
            <Typography as="h2">Preprints</Typography>
            <PublicationsComponent data={preprints} isPreprint />
            <Spacer size="xl" />
          </>
        )}
        <Typography as="h2">Publications</Typography>
        <PublicationsComponent data={publications} />
      </Wrapper>
    </>
  );
}
