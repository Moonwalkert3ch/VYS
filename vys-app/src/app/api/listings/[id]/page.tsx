// src/app/listing/[id]/page.tsx

import ListingModels from './ListingModels';

export default async function ListingPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Listing {params.id}</h1>
      {/* Other listing details… */}
      <ListingModels listingId={params.id} />
    </div>
  );
}
