// app/my-listings/page.tsx or pages/my-listings.tsx
'use client';

import BottomNavBar from './BottomNavBar';

export default function MyListingsPage () {
  return (
    <>
        <main className="min-h-screen px-6 py-8 bg-indigo-950 text-[#A1C9FF]">
            {/* Page Header */}
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-center">My VYS</h1>
            </header>

            {/* section header */}
            <section className="mb-6">
                <h2 className="text-lg sm:text-xl font-semibold">My Listings</h2>
            </section>

            {/* Listings Section */}
            <section className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for Listings */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((listing) => (
                    <div
                        key={listing}
                        className="bg-gray-300 p-4 rounded-md text-indigo-950 hover:bg-[#A1C9FF] hover:text-indigo-950 transition-colors cursor-pointer"
                    >
                        <h2 className="text-lg font-semibold">Listing {listing}</h2>
                        <p className="text-sm mt-2">Description of listing {listing}.</p>
                    </div>
                ))}
            </section>
            
        </main>

        <BottomNavBar />
    </>
  );
};

