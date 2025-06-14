'use client';

import { useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BottomNavBar from '@/components/BottomNavBar';
import Link from 'next/link';


export default function EditListingPage() {
  const router = useRouter();
  const [price, setPrice] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'ship'>('pickup');
  const additionalImages = Array(5).fill('/placeholder.jpg');

  



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
                <h1 className="text-2xl font-bold text-center w-full">EDIT LISTING</h1>
            </div>
            <div className="w-full max-w-screen-md space-y-6">

{/* 3D Model Preview + Scrollable Thumbnails */}
<div className="w-full max-w-md flex flex-col items-center gap-4 mt-8">
  {/* 3D Model Placeholder */}
  <div className="w-full aspect-square bg-white rounded-md flex items-center justify-center text-black font-semibold text-sm">
    3D Model Placeholder
  </div>

 {/* Scrollable Additional Images (Swipeable) */}
    <div className="w-full -mx-4 px-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 w-max">
            {/* Plus sign card */}
            <Link href="/upload-image">
            <div className="w-20 h-20 flex-shrink-0 bg-white rounded-md flex items-center justify-center text-black text-xl font-bold hover:brightness-90">
                +
            </div>
            </Link>

            {/* Image Placeholders */}
            {additionalImages.map((src, index) => (
            <div
                key={index}
                className="w-20 h-20 flex-shrink-0 bg-white rounded-md flex items-center justify-center text-black text-xs cursor-pointer hover:brightness-90"
            >
                Img {index + 1}
            </div>
            ))}
        </div>
    </div>
    </div>


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
                    <Link href="/edit-generate-name">
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
                    <Link href="/edit-generate-description">
                    <button
                        type="button"
                        className="absolute top-10 right-2 bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs px-3 py-2 rounded-md flex items-center gap-1 shadow"
                    >
                        <Sparkles className="h-4 w-4" />
                        Generate Description
                    </button>
                    </Link>
                </div>


                {/* Save Changes Button */}
                <div className="flex justify-center pt-4">
                    <Link href="/product-listings">
                        <button
                            type="submit"
                            className="bg-[#052958] hover:bg-indigo-950 text-[#A1C9FF] outline font-semibold py-2 px-6 rounded-full transition duration-200"
                        >
                            Submit
                        </button>
                    </Link>
                    
                </div>
            </div>
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