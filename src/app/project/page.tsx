import { RefreshCwIcon } from 'lucide-react';
import { Link, NavToggle, NavToggles, PageTitle, Wrapper } from '@/components';
import { Project, Projects } from '@/components/pages/project/project';
import { data } from './dummy';

interface Props {
  searchParams: {
    filter: string;
  };
}

interface TProject {
  uid: number;
  title: string;
  organization: string;
  ongoing: number;
  period: string;
  information: string;
  article: { title: string; url: string }[];
}

export default async function Page({ searchParams }: Props) {
  const projects = (() => {
    const { filter } = searchParams;

    if (filter === 'ongoing') return data.data.filter((i) => i.ongoing);
    if (filter === 'finished') return data.data.filter((i) => !i.ongoing);
    return data.data;
  })();

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

const NavComponent = () => (
  <NavToggles>
    <NavToggle
      url="/project?filter=all"
      label="ALL"
      paramKey="filter"
      value="all"
      fallback
    />
    <NavToggle
      url="/project?filter=ongoing"
      label="ONGOING"
      paramKey="filter"
      value="ongoing"
    />
    <NavToggle
      url="/project?filter=finished"
      label="FINISHED"
      paramKey="filter"
      value="finished"
    />
  </NavToggles>
);

const ProjectsComponent = ({ projects }: { projects: TProject[] }) => (
  <Projects>
    {projects.length === 0 && (
      <div>
        <span>No matching items were found.</span>&nbsp;
        <Link icon={RefreshCwIcon} href="/project">
          reset filters
        </Link>
      </div>
    )}
    {projects.map(
      ({ uid, title, organization, ongoing, period, information, article }) => (
        <Project
          key={`project:${uid}`}
          title={title}
          organization={organization}
          ongoing={ongoing}
          period={period}
          information={information}
          article={article}
        />
      )
    )}
  </Projects>
);
