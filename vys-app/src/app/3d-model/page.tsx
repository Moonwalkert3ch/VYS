'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ThreeDModelPage from '@/components/ThreeDModelPage';

export default function ThreeDModel() {
  const sp = useSearchParams();
  const listingId = sp.get('listing');

  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ThreeDModelPage listingId={listingId ?? undefined}/>
    </Suspense>
  );
}