'use client';

import { Camera, Plus, ArrowLeft } from 'lucide-react';
import BottomNavBar from './BottomNavBar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function UploadImagePage() {
  const router = useRouter();

  return (
    <>
      <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col p-4 pb-32 items-center">
        {/* Header */}
        <div className="relative w-full max-w-screen-md flex items-center justify-center h-12 mt-4 mb-6">
          {/* Left Arrow */}
          <button
            onClick={() => router.back()}
            className="absolute left-0"
          >
            <ArrowLeft className="text-[#A1C9FF] h-6 w-6" />
          </button>

          {/* Centered Title */}
          <h1 className="text-2xl font-bold text-center">UPLOAD IMAGES</h1>
        </div>

        {/* Image Upload Grid */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-md justify-center">
          {/* First Image Slot with Camera Icon */}
          <div className="bg-white aspect-square flex items-center justify-center rounded-md">
            <Camera className="h-8 w-8 text-black" />
          </div>

          {/* 5 More Slots with Plus Icons */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white aspect-square flex items-center justify-center rounded-md">
              <Plus className="h-6 w-6 text-black" />
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-10 flex justify-center w-full">
          <Link href="/3d-model">
          <button className="bg-[#052958] hover:bg-indigo-900 text-[#A1C9FF] outline font-semibold py-2 px-6 rounded-full transition duration-200 w-40">
            Submit
          </button>
          </Link>
        </div>
      </main>

      <BottomNavBar />
    </>
  );
}

// Compare this snippet from vys-app/src/components/3DModelPage.tsx:
