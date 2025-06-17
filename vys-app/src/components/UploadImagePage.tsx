'use client';

import { Camera, Plus, ArrowLeft } from 'lucide-react';
import BottomNavBar from './BottomNavBar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import WebcamCapture from '@/components/WebcamCapture';
import { useImageContext } from '@/context/ImageContext';

export default function UploadImagePage() {
  const router = useRouter();
  const { imgs, setImgs } = useImageContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

        {/* Show webcam only when a slot is clicked */}
        {activeIndex !== null && (
          <WebcamCapture 
            onCapture={(dataUrl) => {
              setImgs(prev => {
                const next = [...prev];
                next[activeIndex] = dataUrl;
                return next;
              });
              setActiveIndex(null); // hide webcam after capture
            }}
          />
        )}

        {/* Image Upload Grid */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
        {/* <div className="grid grid-cols-3 gap-4 w-full max-w-md justify-center"> */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white aspect-square flex items-center justify-center rounded-md cursor-pointer overflow-hidden"
            onClick={() => !imgs[i] && setActiveIndex(i)}
          >
            {imgs[i] ? (
              <img src={imgs[i]} alt={`capture-${i}`} className="object-cover w-full h-full" />
            ) : (
              <span className="text-gray-500">+</span>
            )}
          </div>
          // First Image Slot with Camera Icon
          // <div className="bg-white aspect-square flex items-center justify-center rounded-md">
            // <Camera className="h-8 w-8 text-black" />
          // </div>

          // 5 More Slots with Plus Icons
          // {[...Array(5)].map((_, i) => (
            // <div key={i} className="bg-white aspect-square flex items-center justify-center rounded-md">
              // <Plus className="h-6 w-6 text-black" />
            // </div>
          // ))}
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-10 flex justify-center w-full">
        <button
          onClick={() => {
            if (!imgs[0]) return alert('Capture at least one image first');
            // setGlobalImgs(imgs);
            // router.push(`/3d-model?img=${encodeURIComponent(imgs[0])}`);
            router.push('/3d-model');
          }}
          className="bg-[#052958] hover:bg-indigo-900 text-[#A1C9FF] font-semibold py-2 px-6 rounded-full transition duration-200 w-40"
        >
          Submit
        </button>
          {/* <Link href="/3d-model">
          <button className="bg-[#052958] hover:bg-indigo-900 text-[#A1C9FF] outline font-semibold py-2 px-6 rounded-full transition duration-200 w-40">
            Submit
          </button>
          </Link> */}
        </div>
      </main>

      <BottomNavBar />
    </>
  );
}

// Compare this snippet from vys-app/src/components/3DModelPage.tsx:
