import { NextResponse } from 'next/server';
import { prisma } from '../prisma';

export async function POST(request: Request) {
  const body = await request.json();
  const { title, hasFile, content, isHeadline } = body;

  await prisma.board.create({
    data: {
      title: title,
      content: content,
      hasFile: hasFile,
      isHeadline: isHeadline,
    },
  });
  return NextResponse.json({
    message: 'success',
  });
}
