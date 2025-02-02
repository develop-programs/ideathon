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
            const sponsors = await prisma.sponsers.findMany({
                take: parseInt(limit),
            });
            return NextResponse.json(sponsors, { status: 200 });
        }
        if (order) {
            const sponsors = await prisma.sponsers.findMany({
                orderBy: {
                    name: order === 'asc' ? 'asc' : 'desc',
                },
            });
            return NextResponse.json(sponsors, { status: 200 });
        }
        const sponsors = await prisma.sponsers.findMany();
        return NextResponse.json(
            {
                message: "OK👍",
                sponsors,
                total: sponsors.length,
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
            const sponsor = await prisma.sponsers.create({
                data: {
                    name: body.name,
                    logo: body.logo,
                    website: body.website,
                    tier: body.tier,
                },
            });
            return NextResponse.json(sponsor, { status: 201 });
        }
        const sponsors = await prisma.sponsers.createMany({
            data: body.map(sponsor => ({
                name: sponsor.name,
                logo: sponsor.logo,
                website: sponsor.website,
                tier: sponsor.tier,
            })),
        });
        return NextResponse.json({ data: sponsors }, { status: 201 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    } finally {
        await disconnectPrisma();
    }
}

export async function PATCH(req: NextRequest) {
    await connectPrisma();
    try {
        const body = await req.json();
        const id = req.nextUrl.searchParams.get("id");
        if (Array.isArray(body)) {
            const updatePromises = body.map(sponsor => prisma.sponsers.update({
                where: { id: Number(id) },
                data: {
                    name: sponsor.name,
                    logo: sponsor.logo,
                    website: sponsor.website,
                },
            }));
            const updatedSponsors = await Promise.all(updatePromises);
            return NextResponse.json(updatedSponsors, { status: 200 });
        } else {
            const sponsor = await prisma.sponsers.update({
                where: {
                    id: Number(id),
                },
                data: {
                    name: body.name,
                    logo: body.logo,
                    website: body.website,
                },
            });
            return NextResponse.json(sponsor, { status: 200 });
        }
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    } finally {
        await disconnectPrisma();
    }
}

export async function DELETE(req: NextRequest) {
    await connectPrisma();
    try {
        const body = await req.json();
        const sponsor = await prisma.sponsers.delete({
            where: {
                id: body.id,
            },
        });
        return NextResponse.json(sponsor, { status: 200 });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    } finally {
        await disconnectPrisma();
    }
}