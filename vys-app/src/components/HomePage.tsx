'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Plus, Heart } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BottomNavBar from '@/components/BottomNavBar';

const products = [
  {
    id: 1,
    title: 'Belkin 2-In-1 MagSafe Wireless Charging Dock',
    price: '$79.99',
    originalPrice: '$119.99',
    discount: '15% Off',
    image: '/images/sample-product.png', // Replace with actual image paths
  },
  {
    id: 5,
    title: 'Belkin 2-In-1 MagSafe Wireless Charging Dock',
    price: '$79.99',
    originalPrice: '$119.99',
    discount: '15% Off',
    image: '/images/sample-product.png', // Replace with actual image paths
  },
  {
    id: 6,
    title: 'Belkin 2-In-1 MagSafe Wireless Charging Dock',
    price: '$79.99',
    originalPrice: '$119.99',
    discount: '15% Off',
    image: '/images/sample-product.png', // Replace with actual image paths
  },
  {
    id: 7,
    title: 'Belkin 2-In-1 MagSafe Wireless Charging Dock',
    price: '$79.99',
    originalPrice: '$119.99',
    discount: '15% Off',
    image: '/images/sample-product.png', // Replace with actual image paths
  },
  {
    id: 8,
    title: 'Belkin 2-In-1 MagSafe Wireless Charging Dock',
    price: '$79.99',
    originalPrice: '$119.99',
    discount: '15% Off',
    image: '/images/sample-product.png', // Replace with actual image paths
  },
  // Add more products as needed
];

export default function HomePage() {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const router = useRouter();
  // Function to handle the floating action button click

  return (
    <>
      <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col p-4 pb-32">
         {/* Page Header */}
        <header className="w-full max-w-screen-lg mt-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#A1C9FF]">
                HOME
            </h1>
          </header>
           <h2 className="text-lg sm:text-xl font-semibold text-[#A1C9FF]">
                Search
        </h2>
        {/* Search Bar Row */}
        <div className="w-full max-w-screen-lg flex flex-row sm:flex-row items-center gap-2 mt-4 px-2">
          {/* Main Search Box */}
          <div className="flex items-center bg-white text-gray-500 rounded-full px-4 py-2 w-full sm:flex-1">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="What are you searching for?"
              className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Zip Code + Go */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter zip code"
              className="rounded-md px-2 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none w-full sm:w-24"
            />
            <button className="bg-[#052958] text-[#A1C9FF] font-semibold px-4 py-2 rounded-md hover:bg-[#45132F] transition">
              Go
            </button>
          </div>
        </div>
      
       {/* Listings Section */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#A1C9FF] mt-8">
                Favorites
        </h2>
            <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product-details`}
                  className="relative bg-white rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 p-3 text-indigo-950"
                  style={{
                    boxShadow: '0 10px 20px rgba(161, 201, 255, 0.4)',
                  }}
                >
                  {/* Product Image */}
                  <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="contain"
                      className="p-2"
                    />
                    {/* Favorite Icon */}
                    <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1 text-white hover:bg-black/80">
                      <Heart className="w-4 h-4 inline" />
                      <span className="ml-1 font-bold text-sm">+</span>
                    </div>
                    {/* Discount Badge */}
                    <div className="absolute bottom-2 left-2 bg-green-400 text-black text-xs font-bold px-2 py-0.5 rounded-md">
                      {product.discount}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-3 space-y-1">
                    <h3 className="text-sm font-semibold leading-tight">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold">{product.price}</span>
                      <span className="text-sm line-through text-gray-500">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </section>


      {/* Listings Section */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#A1C9FF] mt-8">
                Listings
        </h2>
            <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product-details`}
                  className="relative bg-white rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 p-3 text-indigo-950"
                  style={{
                    boxShadow: '0 10px 20px rgba(161, 201, 255, 0.4)',
                  }}
                >
                  {/* Product Image */}
                  <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="contain"
                      className="p-2"
                    />
                    {/* Favorite Icon */}
                    <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1 text-white hover:bg-black/80">
                      <Heart className="w-4 h-4 inline" />
                      <span className="ml-1 font-bold text-sm">+</span>
                    </div>
                    {/* Discount Badge */}
                    <div className="absolute bottom-2 left-2 bg-green-400 text-black text-xs font-bold px-2 py-0.5 rounded-md">
                      {product.discount}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-3 space-y-1">
                    <h3 className="text-sm font-semibold leading-tight">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold">{product.price}</span>
                      <span className="text-sm line-through text-gray-500">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          </main>

      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-24 right-4 z-50">
        <div
          className={`flex items-center transition-all duration-300 ease-in-out ${
            isFabOpen ? 'w-32' : 'w-12'
          } bg-[#052958] hover:bg-[#45132F] text-[#A1C9FF] rounded-full px-3 py-2 cursor-pointer shadow-lg`}
          onClick={() => {
            if (isFabOpen) {
              router.push('/create-listing');
            } else {
              setIsFabOpen(true);
            }
          }}
          onTouchStart={() => setIsFabOpen(true)}
          onMouseLeave={() => setIsFabOpen(false)}
        >
          <Plus className="h-5 w-5" />
          {isFabOpen && <span className="ml-2 whitespace-nowrap text-sm">Create</span>}
        </div>
      </div>
      <BottomNavBar />
    </>
  );
}


// This component represents the home page of the VYS app, featuring a search bar and a bottom navigation bar with icons for Home, Profile, Search, Notifications, and My VYS. The layout is designed to be responsive and user-friendly, with a focus on accessibility and ease of use.
// The search bar allows users to search for items, while the zip code input and "Go" button enable location-based searches. The bottom navigation bar provides quick access to key features of the app, enhancing user experience and engagement.
// The design incorporates a modern aesthetic with a color scheme that aligns with the VYS brand, ensuring a cohesive look and feel throughout the application. The use of icons enhances visual clarity and usability, making it easy for users to navigate the app.
// The component is built using React and Tailwind CSS, leveraging utility classes for styling and layout. It is designed to be easily extendable, allowing for future enhancements and additional features as needed.
// The HomePage component is a functional React component that serves as the main entry point for authenticated users in the VYS app. It includes a search bar for item searches and a bottom navigation bar with icons for easy access to key features.
// The component is styled using Tailwind CSS, ensuring a responsive and visually appealing design. It is designed to be user-friendly, with a focus on accessibility and ease of navigation.
// The HomePage component is part of a larger application that utilizes Clerk for user authentication, ensuring that only signed-in users can access the home page. This enhances security and provides a personalized experience for each user.
// The component is structured to be easily maintainable and extendable, allowing for future enhancements and additional features as needed. It serves as a foundational part of the VYS app, providing a seamless user experience from the moment users log in.