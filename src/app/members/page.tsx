import { PageTitle, Wrapper } from '@/components';
import { Group } from '@/components/pages/members';
import { data } from '@/components/pages/members/dummy';
import { Member } from '@/components/pages/members/member';
import styles from './page.module.scss';

export default async function Page() {
  return (
    <>
      <PageTitle title="Members" subtitle="PEOPLE" />
      <Wrapper className={styles.wrapper}>
        <Group title="Ph.D. Candidates">
          {data.doctor.map(({ uid, name, alias, email, history }) => (
            <Member
              key={uid}
              image="/assets/professor.jpg"
              name={name}
              alias={alias}
              email={email}
              history={history}
            />
          ))}
        </Group>
        <Group title="M.S. Candidates">
          {data.master.map(({ uid, name, alias, email, history }) => (
            <Member
              key={uid}
              image={uid === 4 ? null : '/assets/professor.jpg'}
              name={name}
              alias={alias}
              email={email}
              history={history}
            />
          ))}
        </Group>
      </Wrapper>
    </>
  );
}
