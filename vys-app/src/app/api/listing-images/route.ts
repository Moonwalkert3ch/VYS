import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { listingId, imageUrl } = await req.json();

  const listing = await prisma.listing.findUnique({ where: { id: listingId } });
  if (!listing || listing.userId !== userId) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const img = await prisma.listingImage.create({
    data: { listingId, imageUrl },
  });

  return NextResponse.json(img);
}
