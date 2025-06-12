'use client';

import Image from 'next/image';
import { useState } from 'react';
// import { UserCircle2 } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';
import BottomNavigationBar from '@/components/BottomNavBar';

export default function ProductListingPage() {
  const [selectedImage, setSelectedImage] = useState(null);
    const router = useRouter();
  

  const additionalImages = Array(5).fill('/placeholder.jpg'); // Replace with actual paths

  return (
    <>
        <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col items-center p-4 pb-32">
            {/* Header */}
            <div className="w-full flex items-center justify-between py-4 max-w-screen-md">
                <button
                    onClick={() => router.back()}
                        className="absolute left-0"
                    >
                    <ArrowLeft className="text-[#A1C9FF] h-6 w-6" />
                </button>
            <h1 className="text-2xl font-bold text-center flex-1 -ml-6">PRODUCT LISTING</h1>
            </div>

            <div className="w-full max-w-screen-md space-y-6">

                {/* 3D Model + Additional Images Grid */}
                <div className="grid grid-cols-3 gap-2 mt-8">
                {/* 3D Model Placeholder */}
                <div className="col-span-2 row-span-2 bg-white aspect-square rounded-md flex items-center justify-center text-black font-semibold text-sm">
                    3D Model Placeholder
                </div>

                {/* 6 Additional Image Placeholders */}
                {additionalImages.map((src, index) => (
                    <div
                    key={index}
                    onClick={() => setSelectedImage(src)}
                    className="bg-white aspect-square rounded-md cursor-pointer flex items-center justify-center text-black text-sm hover:brightness-90"
                    >
                    View {index + 1}
                    </div>
                ))}
                </div>

                {/* Product Name */}
                <h2 className="text-lg sm:text-xl font-bold mt-4">Product Name</h2>
                <h3 className="text-ls sm:text-base">Delivery Method: Pick up</h3>
                <h3 className="text-ls sm:text-base">Availability Status: Available</h3>

                {/* Scrollable Description */}
                <h3 className="text-lg sm:text-xl font-bold">Product Description</h3>
                <div className="bg-white text-black p-4 rounded-lg max-h-48 overflow-y-auto text-sm">
                    <p>
                        This is a placeholder for the product description. The area is scrollable in case of a long description. You can add more details here including condition, materials, or backstory of the item. To show how the description looks when it is long, you can add more text here. This is a placeholder for the product description. The area is scrollable in case of a long description. You can add more details here including condition, materials, or backstory of the item.
                    </p>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mt-4">Price</h3>

                <div className="bg-white w-32 text-black p-4 rounded-lg max-h-48 overflow-y-auto text-sm">
                <p>
                    $100.00
                </p>
                </div>

                {/* Optional: Modal to Enlarge Image */}
                {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <Image src={selectedImage} alt="Selected" className="max-w-full max-h-full rounded-lg" />
                </div>
                )}           
            </div>
        </main>

        <BottomNavigationBar />
    </>
  );
}
