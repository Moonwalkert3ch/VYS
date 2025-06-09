'use client';

import { useState } from 'react';
import { ArrowLeft, Sparkles, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BottomNavBar from '@/components/BottomNavBar';
import Link from 'next/link';


export default function EditListingPage() {
  const router = useRouter();
  const [price, setPrice] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  return (
    <>
        <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col p-4 pb-32 items-center">
            {/* Header */}
            <div className="relative w-full max-w-screen-md flex items-center justify-center h-12 mt-4 mb-6">
                <button
                onClick={() => router.back()}
                className="absolute left-0"
                >
                <ArrowLeft className="text-[#A1C9FF] h-6 w-6" />
                </button>
                <h1 className="text-2xl font-bold text-center w-full">Edit Listing</h1>
            </div>

            {/* 3D Model Placeholder */}
            <Link href="/upload-image" className="block w-full max-w-md">
                <div className="bg-gray-300 w-full aspect-square max-w-md flex items-center justify-center rounded-md mb-6">
                    <p className='text-bold text-xl text-black text-center'>3d image rendered here</p>
                </div>
            </Link>

            {/* Form */}
            <form className="w-full max-w-md space-y-4">
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
                <div className="flex items-start gap-3">
                    <textarea
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                        onFocus={() => setIsDescriptionFocused(true)}
                        onBlur={() => setIsDescriptionFocused(false)}
                        placeholder="Enter item description"
                        className={`flex-grow px-4 py-3 rounded-md text-black placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 ${
                        isDescriptionFocused ? 'h-[50vh]' : 'h-28'
                        }`}
                    />
                    <button
                        type="button"
                        className="bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs px-3 py-2 rounded-md h-fit mt-2 flex items-center gap-1"
                    >
                        <Sparkles className="h-4 w-4" />
                        Generate Description
                    </button>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-center pt-4">
                    <Link href="/product-listings">
                        <button
                            type="submit"
                            className="bg-[#052958] hover:bg-indigo-950 text-[#A1C9FF] outline font-semibold py-2 px-6 rounded-full transition duration-200"
                        >
                            Save
                        </button>
                    </Link>
                </div>
            </form>
        </main>

        <BottomNavBar />
    </>
  );
}
// Note: This code is a simplified version of the CreateListingPage component, adapted for editing an existing listing.
// It includes a form for editing the price, item name, and description, with AI generation buttons for the name and description.
// The 3D model placeholder is represented by a camera icon, and the layout is styled similarly to the original component.
// The component uses the `useRouter` hook from Next.js for navigation and maintains local state for the form inputs.
// The `BottomNavBar` component is included at the bottom for navigation purposes.
// The component is designed to be used in a Next.js application, specifically for editing a listing in a marketplace or similar platform.
// This code defines an EditListingPage component for a Next.js application.
// It allows users to edit an existing listing by updating the price, item name, and description.   