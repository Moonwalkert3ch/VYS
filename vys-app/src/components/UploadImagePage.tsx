'use client';

import { Camera, Plus, ArrowLeft } from 'lucide-react';
import BottomNavBar from './BottomNavBar';
// import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UploadImagePage() {
  const router = useRouter();

  return (
    <>
      <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col items-center p-4 pb-32">
        <div className="w-full max-w-screen-lg flex flex-col gap-6 mt-6 px-4">
          {/* Header with Arrow + Title */}
          <div className="flex items-center gap-4">
            <button onClick={() => router.push('/home')}>
              <ArrowLeft className="text-[#A1C9FF] h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold">Upload Images</h1>
          </div>

          {/* Image Upload Grid */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
            {/* First Image Slot with Camera Icon */}
            <div className="bg-gray-300 aspect-square flex items-center justify-center rounded-md">
              <Camera className="h-8 w-8 text-black" />
            </div>

            {/* 5 More Slots with Plus Icons */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gray-300 aspect-square flex items-center justify-center rounded-md">
                <Plus className="h-6 w-6 text-black" />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button className="mt-8 bg-[#052958] hover:bg-indigo-950 text-[#A1C9FF] font-semibold py-2 px-6 rounded-full transition duration-200">
            Submit
          </button>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </>
  );
}
