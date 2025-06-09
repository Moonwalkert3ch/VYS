// app/create-listing/page.tsx
'use client';

import { ArrowLeft, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BottomNavBar from '@/components/BottomNavBar';

export default function CreateListingPage() {
  const router = useRouter();
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  return (
    <>
      <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col items-center px-4 pb-32">
        {/* Header */}
        <div className="w-full flex items-center justify-between py-4 max-w-screen-md">
          <button onClick={() => router.back()}>
            <ArrowLeft className="text-[#A1C9FF] h-6 w-6" />
          </button>
          <h1 className="text-lg sm:text-xl font-bold text-center flex-1 -ml-6">CREATE LISTING</h1>
        </div>

        {/* Capture Images */}
        <div className="bg-gray-300 w-full aspect-square max-w-md flex flex-col items-center justify-center rounded-md">
          <Camera className="h-10 w-10 text-black mb-2" />
          <span className="text-black font-medium">Capture Images</span>
        </div>

        {/* Form */}
        <div className="w-full max-w-md mt-6 space-y-4">
          <div className="flex items-center gap-3">
            {/* <button className="bg-white p-3 rounded-lg">
              <Plus className="h-6 w-6 text-indigo-950" />
            </button> */}
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Item Name..."
              className="flex-grow px-4 py-3 rounded-md text-black placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs px-3 py-2 rounded-md">
              Generate Name
            </button>
          </div>

          <div className="flex items-start gap-3">
            <textarea
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              placeholder="Item Description..."
              className="flex-grow px-4 py-3 rounded-md text-black placeholder-gray-400 focus:outline-none h-28 resize-none"
            />
            <button className="bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs px-3 py-2 rounded-md h-fit mt-2">
              Generate Description
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </>
  );
}
// This code defines a CreateListing component for a Next.js application.
// It includes a header with a back button, an image capture area, and a form for entering item details.
// The bottom navigation bar provides quick access to different sections of the app.
// The component uses Lucide icons for visual elements and maintains a responsive design with Tailwind CSS classes.
// The form allows users to input an item name and description, with options for AI-generated suggestions.