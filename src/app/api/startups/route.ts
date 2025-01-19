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
            const startups = await prisma.startup.findMany({
                take: parseInt(limit),
            });
            return NextResponse.json(startups, { status: 200 });
        }
        if (order) {
            const startups = await prisma.startup.findMany({
                orderBy: {
                    name: order === 'asc' ? 'asc' : 'desc',
                },
            });
            return NextResponse.json(startups, { status: 200 });
        }
        const startups = await prisma.startup.findMany();
        return NextResponse.json(
            {
                message: "OK👍",
                startups,
                total: startups.length,
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
            const startup = await prisma.startup.create({
                data: {
                    name: body.name,
                    slug: body.slug,
                    description: body.description,
                    image: body.image,
                    category: body.category,
                    longDescription: body.longDescription,
                    founded: body.founded,
                    team: body.team,
                    contact: body.contact,
                },
            });
            return NextResponse.json(startup, { status: 201 });
        }
        const startups = await prisma.startup.createMany({
            data: body,
        });
        return NextResponse.json({ data: startups }, { status: 201 });
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
        const startup = await prisma.startup.update({
            where: { id: Number(id) },
            data: {
                name: body.name,
                slug: body.slug,
                description: body.description,
                image: body.image,
                category: body.category,
                longDescription: body.longDescription,
                founded: body.founded,
                team: body.team,
                contact: body.contact,
            },
        });
        return NextResponse.json(startup, { status: 200 });
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
        const startup = await prisma.startup.delete({
            where: { id },
        });
        return NextResponse.json(startup, { status: 200 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    } finally {
        await disconnectPrisma();
    }
}
