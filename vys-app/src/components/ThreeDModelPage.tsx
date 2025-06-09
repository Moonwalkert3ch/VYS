'use client';

import { CheckCircle, XCircle, RotateCw } from 'lucide-react';
import Link from 'next/link';
import BottomNavBar from '@/components/BottomNavBar';

export default function ThreeDModelPage() {
  return (
    <>
        <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col p-4 pb-32 items-center">
            {/* Header */}
            <div className="relative w-full max-w-screen-md flex items-center justify-center h-12 mt-4 mb-6">
                <h1 className="text-2xl font-bold text-center">3D Model</h1>
            </div>

            {/* Placeholder for 3D Model Upload */}
            <div className="bg-gray-300 aspect-square w-full max-w-md flex items-center justify-center rounded-md">
                <p className="text-black">3D Model Rendering Area</p>
            </div>

            {/* Action Buttons: Accept, Retry, Cancel */}
            <div className="mt-10 flex justify-center gap-10 w-full">
                {/* Accept */}
                <div className="flex flex-col items-center">
                <button className="bg-green-600 hover:bg-[#45132F] p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-[#A1C9FF]" />
                </button>
                <span className="text-sm mt-1">Accept</span>
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
                <button className="bg-red-600 hover:bg-[#45132F] p-3 rounded-full">
                    <XCircle className="h-6 w-6 text-[#A1C9FF]" />
                </button>
                <span className="text-sm mt-1">Cancel</span>
                </div>
            </div>
        </main>

        <BottomNavBar />
    </>
  );
}
