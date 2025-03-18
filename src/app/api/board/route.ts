import { NextResponse } from 'next/server';
import { prisma } from '../prisma';

export async function POST(request: Request) {
  const body = await request.json();
  const { title, hasFile, content, isHeadline } = body;

  // 새 board 데이터를 생성합니다.
  const newBoard = await prisma.board.create({
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
