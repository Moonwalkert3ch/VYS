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
  const [isAvailable, setIsAvailable] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'ship'>('pickup');
 
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
      <div className="w-full max-w-md flex flex-col gap-4 mb-6">
        {/* Large Image Placeholder */}
        <Link href="/upload-image" className="block w-full max-w-md">
          <div className="cursor-pointer bg-white w-full aspect-square max-w-md flex flex-col items-center justify-center rounded-md transition hover:brightness-95">
            <Camera className="h-10 w-10 text-black mb-2" />
            <span className="text-black font-medium">Capture Images/Video</span>
        </div>
        </Link>
        

        {/* Plus Button Below */}
        <Link
          href="/upload-image"
          className="w-20 h-20 flex items-center justify-center bg-white text-black shadow hover:brightness-95 transition"
          aria-label="Add more images"
        >
          <span className="text-2xl font-bold">+</span>
        </Link>
      </div>



        {/* Form */}
       {/* Delivery Method Options */}
            <div className="w-full max-w-md space-y-2 mb-4">
                <label className="block text-lg sm:text-xl font-bold mt-4 text-[#A1C9FF]">Delivery Method:</label>
                <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name="delivery"
                    value="pickup"
                    checked={deliveryMethod === 'pickup'}
                    onChange={() => setDeliveryMethod('pickup')}
                    className="form-radio text-blue-600"
                />
                <span className="text-sm">Pick up only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name="delivery"
                    value="ship"
                    checked={deliveryMethod === 'ship'}
                    onChange={() => setDeliveryMethod('ship')}
                    className="form-radio text-blue-600"
                />
                <span className="text-sm">Ship only</span>
                </label>
            </div>
            </div>
            

            {/* Price + Availability Toggle Row */}
            <div className="block w-full max-w-md space-y-2 mb-4">
                <h3 className="text-lg sm:text-xl font-bold mt-4">Price</h3>
                <div className="flex justify-between items-center w-full">
                    {/* Price Input */}
                    <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price"
                    className="w-36 px-4 py-3 rounded-md text-black placeholder-gray-400 focus:outline-none"
                    />

                    {/* Toggle Switch */}
                    <div className="flex items-center gap-2">
                    <span className="text-sm">Availability Status:</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isAvailable}
                        onChange={() => setIsAvailable((prev) => !prev)}
                        />
                        <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-lime-500 after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-indigo-950 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                    </div>
                </div>
            </div>

            {/* Item Name with AI Generate */}
            <div className="w-full max-w-md space-y-2 mb-4">
                <h3 className="text-lg sm:text-xl font-bold mt-4">Product Name</h3>
                <div className="flex items-center justify-between gap-4">
                    <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="Enter item name"
                    className="flex-1 px-4 py-3 rounded-md text-black placeholder-gray-400 focus:outline-none"
                    />
                    <Link href="/create-generate-name" className="flex items-center">
                      <button
                      type="button"
                      className="bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs px-3 py-2 rounded-md flex items-center gap-2 whitespace-nowrap"
                      >
                      <Sparkles className="h-4 w-4" />
                      Generate Name
                      </button>
                    </Link>
                </div>
            </div>

                {/* Item Description with AI Generate */}
                <div className="relative w-full max-w-4xl mt-4">
                    <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2">Product Description</h3>
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
                    <Link href="/create-generate-description">
                    <button
                        type="button"
                        className="absolute top-14 right-2 bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs px-3 py-2 rounded-md flex items-center gap-1 shadow"
                    >
                        <Sparkles className="h-4 w-4" />
                        Generate Description
                    </button>
                    </Link>
                </div>

           {/* Save Changes Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#052958] hover:bg-indigo-950 text-[#A1C9FF] outline font-semibold py-2 px-6 rounded-full transition duration-200"
            >
              Submit
            </button>
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