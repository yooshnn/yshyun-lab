import { PageTitle, Wrapper } from '@/components';
import { Members, MembersItem } from '@/components/pages/members';
import { api } from '@/core/api';
import { TMember } from '../types';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const { alumni } = await api<{
    alumni: TMember[];
  }>({ url: 'people' });

  return (
    <>
      <PageTitle title="Alumni" subtitle="PEOPLE" />
      <Wrapper>
        <Members title="Alumni">
          {alumni.map(({ uid, name, alias, email, history }) => (
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
