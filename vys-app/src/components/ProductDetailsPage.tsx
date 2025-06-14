'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronDown, MessageCircle, ArrowLeft } from 'lucide-react';
import BottomNavBar from '@/components/BottomNavBar';
import { useRouter } from 'next/navigation';

export default function ProductDetailsPage() {
  const router = useRouter();
  return (
    <>
      <main className="max-w-screen-md mx-auto p-4 sm:p-6 md:p-8 text-white bg-indigo-950 min-h-screen pb-40">
         {/* Header */}
            <div className="w-full flex items-center justify-between py-4 px-8 max-w-screen-md">
                <button
                    onClick={() => router.back()}
                        className="absolute left-2"
                    >
                    <ArrowLeft className="text-[#A1C9FF] h-6 w-6" />
                </button>
            <h1 className="text-2xl text-[#A1C9FF] font-bold text-center flex-1 -ml-6">PRODUCT DETAILS</h1>
            </div>

        {/* Image Section */}
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/sample-product.png"
            alt="Product"
            width={800}
            height={800}
            className="w-full max-h-[400px] object-contain bg-white rounded"
          />
          {/* Heart Icon */}
          <button className="absolute top-2 right-2 p-2 rounded-full bg-white hover:bg-[#A1C9FF] transition">
            <Heart className="w-5 h-5 text-indigo-950" />
            <span className="text-sm font-bold ml-1 text-indigo-950">+</span>
          </button>

          {/* Discount Label */}
          <div className="absolute bottom-2 left-2 bg-green-500 text-black text-xs px-2 py-1 rounded-md font-bold">
            15% Off
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="flex mt-4 space-x-2 overflow-x-auto sm:justify-start">
          {[1, 2, 3, 4, 5].map((img, i) => (
            <div
              key={i}
              className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded flex items-center justify-center text-black text-xs font-semibold shrink-0"
            >
              Other Image
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg sm:text-xl leading-snug">
            Belkin 2-In-1 MagSafe Wireless Charging Dock 15W Fast Charger, Includes Power Supply
          </h2>
          <button className="mt-1 flex items-center gap-1 text-[#A1C9FF] text-sm hover:underline">
            <span>More Details</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Seller Info */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-2">
          <div>
            <p className="text-sm sm:text-base text-white font-semibold">Seller Name</p>
            <span className="text-green-400 text-xs sm:text-sm font-bold">✅ Available</span>
          </div>
          <Link href="/messages">
            <button className="bg-white text-[#052958] px-3 py-1 rounded flex items-center text-sm font-medium hover:bg-gray-200">
              <MessageCircle className="w-4 h-4 mr-1" />
              Message Seller
            </button>
          </Link>
        </div>

        {/* Price Section */}
        <div className="mt-6 px-2">
          <div className="text-xl sm:text-2xl font-bold text-white">$79.99</div>
          <div className="text-sm sm:text-base line-through text-gray-300">$119.99</div>
          <div className="text-green-400 text-sm sm:text-base font-semibold">15% Off</div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-8 px-2">
          <button className="w-full bg-[#052958] outline text-[#A1C9FF] font-bold py-3 rounded hover:bg-indigo-950 transition text-base sm:text-lg">
            Add to Cart
          </button>
        </div>
      </main>

      {/* Bottom Nav fixed */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <BottomNavBar />
      </div>
    </>
  );
}
