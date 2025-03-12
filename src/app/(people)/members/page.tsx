import { PageTitle, Wrapper } from '@/components';
import { Members, MembersItem } from '@/components/pages/members';
import { data } from '../dummy';
import styles from './page.module.scss';

export default async function Page() {
  return (
    <>
      <PageTitle title="Members" subtitle="PEOPLE" />
      <Wrapper className={styles.wrapper}>
        <Members title="Ph.D. Candidates">
          {data.doctor.map(({ uid, name, alias, email, history }) => (
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
        <Members title="M.S. Candidates">
          {data.master.map(({ uid, name, alias, email, history }) => (
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
      </Wrapper>
    </>
  );
}
