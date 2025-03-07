import { NavToggle, NavToggles, PageTitle, Wrapper } from '@/components';
import { Project, Projects } from '@/components/pages/project/project';
import { data } from './dummy';

interface Props {
  searchParams: {
    filter: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const getProjects = () => {
    const { filter } = searchParams;

    if (filter === 'ongoing') return data.data.filter((i) => i.ongoing);
    if (filter === 'finished') return data.data.filter((i) => !i.ongoing);
    return data.data;
  };

  return (
    <>
      <PageTitle title="Project" subtitle="" />
      <Wrapper>
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
        <Projects>
          {getProjects().map(
            ({
              uid,
              title,
              organization,
              ongoing,
              period,
              information,
              article,
            }) => (
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
      </Wrapper>
    </>
  );
}
