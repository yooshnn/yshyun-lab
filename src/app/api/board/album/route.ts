import { NextResponse } from 'next/server';
import { prisma } from '@/app/api/prisma';

export async function GET(request: Request) {
  const data = await prisma.board.findMany({
    select: {
      uid: true,
      title: true,
      date: true,
      file: {
        take: 1,
        select: {
          file: true,
        },
        orderBy: {
          idx: 'asc',
        },
      },
      _count: {
        select: {
          file: true,
        },
      },
    },
    where: {
      hasFile: { gte: 1 },
      deletedAt: null,
    },
    orderBy: { date: 'desc' },
  });

  const transformed = data.map((item) => ({
    uid: item.uid,
    title: item.title,
    date: item.date,
    image: item.file && item.file.length > 0 ? item.file[0].file : '',
    count: item._count?.file ?? 0,
  }));

  return NextResponse.json({ data: transformed });
}
