'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronDown, MessageCircle } from 'lucide-react';
import BottomNavBar from '@/components/BottomNavBar';

export default function ProductDetailsPage() {
  return (
    <>
      <main className="max-w-md mx-auto p-4 text-white bg-[#052958] min-h-screen pb-32">
        {/* Image Section */}
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/sample-product.png"
            alt="Product"
            width={400}
            height={400}
            className="w-full h-auto object-contain bg-white rounded"
          />
          {/* Heart Icon */}
          <button className="absolute top-2 right-2 p-2 rounded-full hover:bg-[#A1C9FF]">
            <Heart className="w-5 h-5 inline text-indigo-950" />
            <span className="text-sm font-bold ml-1">+</span>
          </button>

          {/* Discount Label */}
          <div className="absolute bottom-2 left-2 bg-green-500 text-black text-xs px-2 py-1 rounded-md font-bold">
            15% Off
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="flex justify-between mt-4 space-x-2 overflow-x-auto">
          {[1, 2, 3, 4, 5].map((img, i) => (
            <div
              key={i}
              className="w-20 h-20 bg-gray-300 rounded flex items-center justify-center text-black text-xs font-semibold"
            >
              Other Image
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-4">
          <h2 className="font-semibold text-lg leading-snug">
            Belkin 2-In-1 MagSafe Wireless Charging Dock 15W Fast Charger, Includes Power Supply
          </h2>
          <button className="mt-1 flex items-center gap-1 text-[#A1C9FF] text-sm hover:underline">
            <span>More Details</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Seller Info */}
        <div className="mt-6 flex items-center justify-between px-2">
          <div>
            <p className="text-sm text-white font-semibold">Seller Name</p>
            <span className="text-green-400 text-xs font-bold">✅ Available</span>
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
          <div className="text-xl font-bold text-white">$79.99</div>
          <div className="text-sm line-through text-gray-300">$119.99</div>
          <div className="text-green-400 text-sm font-semibold">15% Off</div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-8 px-2">
          <button className="w-full bg-[#A1C9FF] text-[#052958] font-bold py-3 rounded hover:bg-[#8abfff] transition">
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

