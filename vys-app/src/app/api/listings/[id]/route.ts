import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

// type Params = { id: string };

export async function GET(
    req: Request,
    context: { params: { id: string } }
) {
    const { id } = context.params;
    const listing = await prisma.listing.findUnique({
        where: { id: Number(id) },
        include: { images: true },
    });
    if (!listing) {
        return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    };
    return NextResponse.json(listing);
  }
  
export async function PUT(
    req: Request,
    context: { params: { id: string } }
) {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id } = context.params;
    const existing = await prisma.listing.findUnique({ where: { id: Number(id) } });
    if (!existing) {
        return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    if (existing.userId !== userId) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // const { title, description, price } = await req.json();
    const data = await req.json();
    const updated = await prisma.listing.update({
        where: { id: Number(id) },
        // data: { title, description, price },
        data: data,
    });
    return NextResponse.json(updated);
  }
  
export async function DELETE(
    req: Request,
    context: { params: { id: string } }
) {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = context.params;
    const existing = await prisma.listing.findUnique({ where: { id: Number(id) } });
    if (!existing) {
        return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    if (existing.userId !== userId) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await prisma.listing.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  }
  