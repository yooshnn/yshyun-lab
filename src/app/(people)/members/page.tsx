import { PageTitle, Wrapper } from '@/components';
import { Members, MembersItem } from '@/components/pages/members';
import { api } from '@/core/api';
import { TMember } from '../types';
import styles from './page.module.scss';

export default async function Page() {
  const { doctor, master } = await api<{
    doctor: TMember[];
    master: TMember[];
  }>({ url: 'people' });

  return (
    <>
      <PageTitle title="Members" subtitle="PEOPLE" />
      <Wrapper className={styles.wrapper}>
        {doctor.length > 0 && (
          <Members title="Ph.D. Candidates">
            {doctor.map(({ uid, name, alias, email, history }) => (
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
        )}
        {master.length > 0 && (
          <Members title="M.S. Candidates">
            {master.map(({ uid, name, alias, email, history }) => (
              <MembersItem
                key={uid}
                image={uid === 4 ? null : '/assets/dummy-members.jpg'}
                name={name}
                alias={alias}
                email={email}
                history={history}
              />
            ))}
          </Members>
        )}
      </Wrapper>
    </>
  );
}
