// src/app/listing/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ListingModels from './ListingModels';
import EditListingPage from '@/components/EditListingPage';

// export default function ListingPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = React.use(params);
export default function ListingPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const sp = useSearchParams();
  const startingEdit = sp.get('edit') === 'true';

  const [isEditing, setIsEditing] = useState(startingEdit);
  const [listing, setListing] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchListing = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/listings/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      setListing(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListing();
  }, [id]);

  if (loading) return <div>Loading…</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!listing || listing.error) return <div>Not Found</div>;

  if (isEditing) {
    return (
      <EditListingPage
        listing={listing}
        onDone={() => {
          fetchListing();
          setIsEditing(false);
        }}
      />
    );
  }

  return (
    <div>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      <p>${listing.price}</p>
      <button onClick={() => setIsEditing(true)}
      className="bg-indigo-600 text-white px-4 py-2 rounded"
    >Edit</button>
      <ListingModels listingId={id} />
    </div>
  );
}
