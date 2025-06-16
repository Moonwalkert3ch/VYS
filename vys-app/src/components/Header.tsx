"use client";

import { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react"; 
import CartPopOut from "@/components/CartPopOut";

export default function Header() {
  const { isSignedIn, user } = useUser();

  const emailUsername = user?.emailAddresses?.[0]?.emailAddress.split('@')[0];

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item A", price: 20 },
    { id: 2, name: "Item B", price: 35 },
  ]);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };


  return (
    <>
      <header
        className={`flex justify-between items-center px-4 py-2 h-16 w-full ${
          isSignedIn ? "bg-[#052958] outline outline-4 outline-[#6C0611]" : "bg_landing_outline"
        }`}
      >
        {/* Logo on the left */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="VYS Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 text-sm sm:text-base">
          {isSignedIn ? (
            <div className="flex flex-col items-end space-y-1">
              {/* Top row: Cart + User Button */}
              <div className="flex items-center gap-4">
                {/* Cart Icon */}
                <button onClick={toggleCart} className="text-white hover:text-[#A1C9FF]">
                  <ShoppingCart className="h-6 w-6" />
                </button>

                {/* User Button */}
                <UserButton afterSignOutUrl="/" />
              </div>

              {/* Greeting below */}
              <h6 className="text-xs text-[#A1C9FF]  font-bold">
                Welcome, {user?.firstName || emailUsername}!
              </h6>
            </div>
          ) : (
            <>
              <SignInButton>
                <span className="text-[#A1C9FF] hover:text-[#301C47] cursor-pointer">
                  Sign In
                </span>
              </SignInButton>
              <SignUpButton>
                <span className="text-[#A1C9FF] hover:text-[#301C47] cursor-pointer">
                  Sign Up
                </span>
              </SignUpButton>
            </>
          )}

        </div>
      </header>
      <CartPopOut
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        removeItem={removeItem}
      />
    </>
  );
}