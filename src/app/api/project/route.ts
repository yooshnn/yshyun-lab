import { NextResponse } from 'next/server';
import { prisma } from '@/app/api/prisma';

export async function GET(request: Request) {
  const data = await prisma.project.findMany({
    select: {
      uid: true,
      title: true,
      ongoing: true,
      period: true,
      information: true,
      article: {
        select: {
          title: true,
          url: true,
        },
      },
    },
  });
  return NextResponse.json({
    data,
  });
}
