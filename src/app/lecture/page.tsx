import React from 'react';
import { PageTitle, Wrapper } from '@/components';
import {
  LecturesComponent,
  NavComponent,
} from '@/components/pages/lecture/lecture';
import { TLecture } from '@/components/pages/lecture/types';
import { data } from './dummy';

interface Props {
  searchParams: {
    filter: string;
  };
}

interface TLectureSelected {
  year: number;
  postgraduate: { spring: string[]; fall: string[] };
  undergraduate: { spring: string[]; fall: string[] };
}

export default async function Page({ searchParams }: Props) {
  const filter = searchParams.filter;
  const lectures = select(data.data, filter);

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

const select = (data: TLecture[], filter: string): TLectureSelected[] => {
  const filtered = data.filter((i) => {
    if (filter === 'postgraduate') return i.postgraduate;
    if (filter === 'undergraduate') return !i.postgraduate;
    return true;
  });

  const grouped = new Map<number, TLectureSelected>();

  filtered.forEach((item) => {
    if (!grouped.has(item.year)) {
      grouped.set(item.year, {
        year: item.year,
        postgraduate: { spring: [], fall: [] },
        undergraduate: { spring: [], fall: [] },
      });
    }

    const target = grouped.get(item.year)!;
    const category = item.postgraduate ? 'postgraduate' : 'undergraduate';

    target[category].spring.push(...item.spring);
    target[category].fall.push(...item.fall);
  });

  return Array.from(grouped.values());
};
