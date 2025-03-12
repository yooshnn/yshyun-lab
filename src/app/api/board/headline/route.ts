import { NextResponse } from "next/server";
import { prisma } from "@/app/api/prisma";

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
            isHeadline: 1,
        },
        orderBy: {
            date: "asc",
        },
    });
    return NextResponse.json({
        data,
    });
}
