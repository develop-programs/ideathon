import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function connectPrisma() {
    // Fix the connection check
    if (!prisma.$connect) {
        await prisma.$connect();
    }
}

async function disconnectPrisma() {
    await prisma.$disconnect();
}

export async function GET(req: NextRequest) {
    await connectPrisma();
    try {
        const limit = req.nextUrl.searchParams.get("limit");
        const order = req.nextUrl.searchParams.get("order");
        if (limit) {
            const teams = await prisma.team.findMany({
                take: parseInt(limit),
            });
            return NextResponse.json(teams, { status: 200 });
        }
        if (order) {
            const teams = await prisma.team.findMany({
                orderBy: {
                    name: order === 'asc' ? 'asc' : 'desc',
                },
            });
            return NextResponse.json(teams, { status: 200 });
        }
        const teams = await prisma.team.findMany();
        return NextResponse.json(
            {
                message: "OK👍",
                teams,
                total: teams.length,
            }, { status: 200 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    } finally {
        await disconnectPrisma();
    }
}

export async function POST(req: NextRequest) {
    await connectPrisma();
    try {
        const body = await req.json();
        if (!Array.isArray(body)) {
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
        }
        const teams = await prisma.team.createMany({
            data: body,
        });
        return NextResponse.json({ data: teams }, { status: 201 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    } finally {
        await disconnectPrisma();
    }
}

export async function PATCH(req: NextRequest) {
    await connectPrisma();
    try {
        const id = req.nextUrl.searchParams.get("id");
        const body = await req.json();
        const team = await prisma.team.update({
            where: { id: Number(id) },
            data: {
                name: body.name,
                role: body.role,
                image: body.image,
                github: body.github,
                instagram: body.instagram,
                linkedIn: body.linkedIn,
            },
        });
        return NextResponse.json(team, { status: 200 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    } finally {
        await disconnectPrisma();
    }
}

export async function DELETE(req: NextRequest) {
    await connectPrisma();
    try {
        const { id } = await req.json();
        const team = await prisma.team.delete({
            where: { id },
        });
        return NextResponse.json(team, { status: 200 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    } finally {
        await disconnectPrisma();
    }
}