'use client';

import { useState } from 'react';
import { CheckCircle, RotateCw, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function EditGenerateDescriptionPage() {
  const [messages] = useState([
    { role: 'ai', content: 'Hi! Describe your item and I’ll suggest a great name.' },
    { role: 'user', content: 'Vintage leather backpack with brass zippers' },
    { role: 'ai', content: 'How about: “Heritage Brass Trailpack”?' }
  ]);

  return (
    <main className="min-h-screen w-full bg-indigo-950 text-[#A1C9FF] flex flex-col items-center p-4 pb-32">
      <h1 className="text-2xl font-bold mb-4">Generate Product Description</h1>

      {/* Chat Box */}
      <div className="w-full max-w-md bg-white text-black rounded-md flex-1 overflow-y-auto p-4 mb-8 shadow-inner">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 ${
              msg.role === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div className={`inline-block px-4 py-2 rounded-lg ${
              msg.role === 'user' ? 'bg-indigo-200' : 'bg-gray-200'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-center gap-10 w-full">
        {/* Accept */}
        <div className="flex flex-col items-center">
          <Link href="/create-listing" className="flex flex-col items-center">
            <button className="bg-green-600 hover:bg-[#45132F] p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-[#A1C9FF]" />
            </button>
            <span className="text-sm mt-1">Accept</span>
          </Link>
        </div>

        {/* Retry */}
        <div className="flex flex-col items-center">
          <Link href="/generate-name" className="flex flex-col items-center">
            <button className="bg-yellow-500 hover:bg-[#45132F] p-3 rounded-full">
              <RotateCw className="h-6 w-6 text-[#A1C9FF]" />
            </button>
            <span className="text-sm mt-1">Retry</span>
          </Link>
        </div>

        {/* Cancel */}
        <div className="flex flex-col items-center">
          <Link href="/create-listing" className="flex flex-col items-center">
            <button className="bg-red-600 hover:bg-[#45132F] p-3 rounded-full">
              <XCircle className="h-6 w-6 text-[#A1C9FF]" />
            </button>
            <span className="text-sm mt-1">Cancel</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
