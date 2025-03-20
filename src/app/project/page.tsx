import { PageTitle, Wrapper } from '@/components';
import { NavComponent, ProjectsComponent } from '@/components/pages/project';
import { api } from '@/core/api';
import { TProject } from './types';
import { select } from './utils';

interface Props {
  searchParams: Promise<{
    filter: string;
  }>;
}

export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }: Props) {
  const data = await api<{ data: TProject[] }>({ url: 'project' });

  const filter = (await searchParams).filter;
  const projects = select(data.data, filter);

  return (
    <>
      <PageTitle title="Project" subtitle="" />
      <Wrapper>
        <NavComponent />
        <ProjectsComponent projects={projects} />
      </Wrapper>
    </>
  );
}
