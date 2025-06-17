'use client';

import { useImageContext } from '@/context/ImageContext';
import { CheckCircle, XCircle, Camera, RotateCw } from 'lucide-react';
import Link from 'next/link';
import BottomNavBar from '@/components/BottomNavBar';

export default function ThreeDModelPage({ listingId }: { listingId?: string }) {
  const { imgs } = useImageContext();
  const captured = imgs[0];

  return (
    <>
        <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col p-4 pb-32 items-center">
            {/* Header */}
            <div className="relative w-full max-w-screen-md flex items-center justify-center h-12 mt-4 mb-6">
                <h1 className="text-2xl font-bold text-center">3D MODEL</h1>
            </div>
            
            {/* Placeholder for 4 3D Model Uploads in a 2x2 grid
            <div className="cursor-pointer bg-white w-full aspect-square max-w-md flex flex-col items-center justify-center rounded-md transition hover:brightness-95">
            <Camera className="h-10 w-10 text-black mb-2" />
            <span className="text-black font-medium">Capture Images/Video</span>
            </div> */}

            {/* Display the captured image */}
            {captured ? (
              <div className="bg-white w-full max-w-md aspect-square rounded-md overflow-hidden mb-6">
                <img src={captured} alt="Captured Image" className="object-cover w-full h-full" />
              </div>
            ) : (
              <div className="bg-white w-full max-w-md aspect-square flex items-center justify-center rounded-md mb-6">
                <Camera className="h-10 w-10 text-black" />
                <span className="text-black font-medium">No image captured</span>
              </div>
            )}

            {/* Action Buttons: Accept, Retry, Cancel */}
            <div className="mt-10 flex justify-center gap-10 w-full">
                {/* Accept */}
                <div className="flex flex-col items-center">
                    <Link href="/edit-listing" className="flex flex-col items-center">
                    {/* <Link href={`/listing/${listingId}?edit=true`} className="flex flex-col items-center"> */}
                    <button className="bg-green-600 hover:bg-[#45132F] p-3 rounded-full">
                        <CheckCircle className="h-6 w-6 text-[#A1C9FF]" />
                    </button>
                    <span className="text-sm mt-1">Accept</span>
                    </Link>
                </div>

                {/* Retry */}
                <div className="flex flex-col items-center">
                    <Link href="/upload-image" className="flex flex-col items-center">
                        <button className="bg-yellow-500 hover:bg-[#45132F] p-3 rounded-full">
                            <RotateCw className="h-6 w-6 text-[#A1C9FF]" />
                        </button>
                        <span className="text-sm mt-1">Retry</span>
                </Link>
                </div>

                {/* Cancel */}
                <div className="flex flex-col items-center">
                    <Link href="/create-listing">
                <button className="bg-red-600 hover:bg-[#45132F] p-3 rounded-full">
                    <XCircle className="h-6 w-6 text-[#A1C9FF]" />
                </button>
                </Link>
                <span className="text-sm mt-1">Cancel</span>
                </div>
            </div>
        </main>

        <BottomNavBar />
    </>
  );
}
