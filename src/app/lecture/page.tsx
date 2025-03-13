import React from 'react';
import { PageTitle, Wrapper } from '@/components';
import { LecturesComponent, NavComponent } from '@/components/pages/lecture';
import { api } from '@/core/api';
import { TLecture } from './types';
import { select } from './utils';

interface Props {
  searchParams: Promise<{
    filter: string;
  }>;
}

export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }: Props) {
  const data = await api<{ data: TLecture[] }>({ url: 'lecture' });

  const filter = (await searchParams).filter;
  const lectures = select(data.data.reverse(), filter);

  return (
    <>
      <PageTitle title="Lecture" subtitle="" />
      <Wrapper>
        <NavComponent />
        <LecturesComponent lectures={lectures} filter={filter} />
      </Wrapper>
    </>
  );
}
