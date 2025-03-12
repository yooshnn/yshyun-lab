import { PageTitle, Spacer, Typography, Wrapper } from '@/components';
import {
  Publication,
  Publications,
} from '@/components/pages/publication/publication';
import { data } from '../dummy';

export default async function Page() {
  return (
    <>
      <PageTitle title="Publication" subtitle="RESEARCH" />
      <Wrapper>
        <Typography as="h2">Preprints</Typography>
        <PreprintsComponent />
        <Spacer size="xl" />
        <Typography as="h2">Publications</Typography>
        <PublicationsComponent />
      </Wrapper>
    </>
  );
}

const PreprintsComponent = () => (
  <Publications>
    {data.preprints.map(
      ({ uid, publishedAt, title, author, information, image, url }) => (
        <Publication
          key={`preprint:${uid}`}
          publishedAt={publishedAt ? new Date(publishedAt) : null}
          title={title}
          author={author}
          information={information}
          image={image}
          url={url}
        />
      )
    )}
  </Publications>
);

const PublicationsComponent = () => (
  <Publications>
    {data.publications.map(
      ({ uid, publishedAt, title, author, information, image, url }, index) => (
        <Publication
          key={`publication:${uid}`}
          showYear={getShowYear(index, publishedAt)}
          publishedAt={new Date(publishedAt)}
          title={title}
          author={author}
          information={information}
          image={image}
          url={url}
        />
      )
    )}
  </Publications>
);

const getShowYear = (index: number, publishedAt: string) => {
  if (index === 0) return true;

  const pre = data.publications[index - 1].publishedAt;
  if (!pre) return true;

  return new Date(pre).getFullYear() !== new Date(publishedAt).getFullYear();
};
