'use client';

import { Trash2 } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartPopOutProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  removeItem: (id: number) => void;
}

export default function CartPopOut({ isOpen, onClose, cartItems, removeItem }: CartPopOutProps) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-indigo-950 text-[#A1C9FF] shadow-lg shadow-[#A1C9FF] z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cart Summary</h2>
          <button onClick={onClose} className="text-[#A1C9FF] hover:text-white text-sm">Close</button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-[#A1C9FF]">Cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-3">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-[#A1C9FF]">${item.price}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-[#A1C9FF] pt-4 mt-4">
          <p className="text-lg font-semibold">Total: ${total}</p>
          <button className="mt-4 w-full bg-[#052958] text-[#A1C9FF] py-2 rounded outline hover:bg-indigo-950">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
