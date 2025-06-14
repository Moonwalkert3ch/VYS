'use client';

import { Trash2 } from 'lucide-react';
import BottomNavBar from '@/components/BottomNavBar';

export default function BillingSummaryPage() {
  // Static example data
  const cartItems = [
    { id: 1, name: 'Vintage Denim Jacket', price: 45.00 },
    { id: 2, name: 'Leather Boots', price: 60.00 },
    { id: 3, name: 'Canvas Tote Bag', price: 25.00 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
        <main className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Billing Summary</h1>

        <div className="space-y-4">
            {cartItems.map((item) => (
            <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
            >
                <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                <Trash2 className="w-5 h-5" />
                </button>
            </div>
            ))}
        </div>

        <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold text-gray-800">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
        </div>

        <button
            className="mt-8 w-full bg-[#052958] text-[#A1C9FF] py-3 rounded-md hover:bg-indigo-950 transition"
        >
            Make Payment
        </button>
        </main>
        <BottomNavBar />
    </>
  );
}
