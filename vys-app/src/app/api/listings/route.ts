import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const listings = await prisma.listing.findMany({
    include: {
        images: true,
        models: true,
        transactions: true,
    },
  });
  return NextResponse.json(listings);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { title, description, price } = await req.json();
  const newListing = await prisma.listing.create({ data: { userId, title, description, price, status: 'active' } });
  return NextResponse.json(newListing);
}
