// app/create-listing/page.tsx
'use client';

import { ArrowLeft, Camera, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BottomNavBar from '@/components/BottomNavBar';
import Link from 'next/link';

export default function CreateListingPage() {
  const router = useRouter();
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  return (
    <>
      <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col items-center px-4 pb-32">
        {/* Header */}
        <div className="w-full flex items-center justify-between py-4 max-w-screen-md">
          
            <button onClick={() => router.back()}>
              <ArrowLeft className="text-[#A1C9FF] h-6 w-6" />
            </button>
         
          <h1 className="text-2xl font-bold text-center flex-1 -ml-6">CREATE LISTING</h1>
        </div>

        {/* Image Capture Section */}
        {/* Capture Images */}
        <Link href="/upload-image" className="block w-full max-w-md">
          <div className="cursor-pointer bg-gray-300 w-full aspect-square max-w-md flex flex-col items-center justify-center rounded-md transition hover:brightness-95">
            <Camera className="h-10 w-10 text-black mb-2" />
            <span className="text-black font-medium">Capture Images</span>
          </div>
        </Link>


        {/* Form */}
      <form className="w-full max-w-md space-y-4 mt-6">
        {/* Price */}
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          className="w-36 px-4 py-3 rounded-md text-black placeholder-gray-400 focus:outline-none"
        />

        {/* Item Name with AI Generate */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
            className="w-48 px-4 py-3 rounded-md text-black placeholder-gray-400 focus:outline-none"
          />
          <button
            type="button"
            className="bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs px-3 py-2 rounded-md flex items-center gap-1"
          >
            <Sparkles className="h-4 w-4" />
            Generate Name
          </button>
        </div>

        {/* Item Description with AI Generate */}
        <div className="relative w-full max-w-4xl">
                    <textarea
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                        onFocus={() => setIsDescriptionFocused(true)}
                        onBlur={() => setIsDescriptionFocused(false)}
                        placeholder="Enter item description"
                        className={`w-full px-4 py-3 pr-28 rounded-md text-black placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 ${
                        isDescriptionFocused ? 'h-[50vh]' : 'h-28'
                        }`}
                    />
                    <button
                        type="button"
                        className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs px-3 py-2 rounded-md flex items-center gap-1 shadow"
                    >
                        <Sparkles className="h-4 w-4" />
                        Generate Description
                    </button>
                </div>
           {/* Save Changes Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#052958] hover:bg-indigo-950 text-[#A1C9FF] outline font-semibold py-2 px-6 rounded-full transition duration-200"
            >
              Save
            </button>
          </div>
        </form>
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