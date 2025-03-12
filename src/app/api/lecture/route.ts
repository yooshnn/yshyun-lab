import { NextResponse } from 'next/server';
import { prisma } from '@/app/api/prisma';

interface GroupedLecture {
  uid: number;
  year: number | null;
  postgraduate: number;
  spring: string[];
  fall: string[];
}

export async function GET(request: Request) {
  const data = await prisma.lecture.findMany({
    select: {
      uid: true,
      title: true,
      year: true,
      postgraduate: true,
      semester: true,
    },
    orderBy: {
      year: 'asc',
    },
  });

  // 같은 year와 postgraduate 값으로 그룹화합니다.
  const grouped = data.reduce<Record<string, GroupedLecture>>(
    (acc, lecture) => {
      const key = `${lecture.year}-${lecture.postgraduate}`;
      if (!acc[key]) {
        acc[key] = {
          uid: lecture.uid,
          year: lecture.year,
          postgraduate: Number(lecture.postgraduate),
          spring: [],
          fall: [],
        };
      }
      if (lecture.semester === 1) {
        acc[key].spring.push(lecture.title);
      } else if (lecture.semester === 2) {
        acc[key].fall.push(lecture.title);
      }
      return acc;
    },
    {}
  );

  const result = { data: Object.values(grouped) };

  return NextResponse.json(result);
}
