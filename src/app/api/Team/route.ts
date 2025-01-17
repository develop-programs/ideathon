import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    await prisma.$connect()
    try {
        const teams = await prisma.team.findMany()
        return NextResponse.json(teams, { status: 200 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    await prisma.$connect()
    try {
        const body = await req.json();
        const team = await prisma.team.create({
            data: {
                name: body.name,
                role: body.role,
                image: body.image,
                github: body.github,
                instagram: body.instagram,
                linkedIn: body.linkedIn,
            },
        });
        return NextResponse.json(team, { status: 201 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}