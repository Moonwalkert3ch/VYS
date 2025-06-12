import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

type Query = { listingId: string };

export async function GET(
  req: Request,
  { params }: { params: Promise<Query> }
) {
  // Authenticate the user
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { listingId } = await params;

  // Verify the listing exists and belongs to this user
  const listing = await prisma.listing.findUnique({
    where: { id: listingId },
  });
  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }
  if (listing.userId !== userId) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Fetch the associated listing models
  const models = await prisma.listingModel.findMany({
    where: { listingId },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(models);
}
