import { NextResponse } from 'next/server';
import { prisma } from '@/app/api/prisma';

export async function GET(request: Request) {
  const data = await prisma.board.findMany({
    select: {
      uid: true,
      hasFile: true,
      title: true,
      date: true,
    },
    where: {
      deletedAt: null,
    },
    orderBy: {
      date: 'desc',
    },
  });
  return NextResponse.json({
    data,
  });
}
