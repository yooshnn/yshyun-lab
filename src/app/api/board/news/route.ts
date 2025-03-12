import { NextResponse } from "next/server";
import { prisma } from "@/app/api/prisma";

export async function GET() {
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
            date: "asc",
        },
    });
    return NextResponse.json({
        data,
    });
}
