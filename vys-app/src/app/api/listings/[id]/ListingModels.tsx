// src/api/listing/[id]/ListingModels.tsx

'use client';

import { useState, useEffect } from 'react';

type ListingModel = {
  id: string;
  modelUrl: string;
  meshyJobId: string | null;
  status: string;
  createdAt: string;
};

export default function ListingModels({ listingId }: { listingId: string }) {
  const [models, setModels] = useState<ListingModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchModels() {
      setLoading(true);
      try {
        const res = await fetch(`/api/listing-models?listingId=${listingId}`);
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || res.statusText);
        }
        setModels(await res.json());
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchModels();
  }, [listingId]);

  if (loading) return <div>Loading models…</div>;
  if (error) return <div>Error: {error}</div>;
  if (models.length === 0) return <div>No models yet</div>;

  return (
    <ul>
      {models.map(m => (
        <li key={m.id}>
          <a href={m.modelUrl} target="_blank" rel="noreferrer">
            View model ({m.status})
          </a>
        </li>
      ))}
    </ul>
  );
}
