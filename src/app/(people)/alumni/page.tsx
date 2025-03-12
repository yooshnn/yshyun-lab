import { PageTitle, Wrapper } from '@/components';
import { Members, MembersItem } from '@/components/pages/members';
import { data } from '../dummy';

export default async function Page() {
  return (
    <>
      <PageTitle title="Alumni" subtitle="PEOPLE" />
      <Wrapper>
        <Members title="Alumni">
          {data.alumni.map(({ uid, name, alias, email, history }) => (
            <MembersItem
              key={uid}
              image="/assets/dummy-members.jpg"
              name={name}
              alias={alias}
              email={email}
              history={history}
            />
          ))}
        </Members>
      </Wrapper>
    </>
  );
}
