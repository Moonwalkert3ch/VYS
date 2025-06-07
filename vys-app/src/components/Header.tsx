"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react"; // Or any other icon lib you're using

export function Header() {
  const { isSignedIn, user } = useUser();

  const emailUsername = user?.emailAddresses?.[0]?.emailAddress.split('@')[0];


  return (
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
          <>
            {/* Cart Icon */}
            <Link href="/cart" className="text-white hover:text-[#A1C9FF]">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            {/* User Button */}
            <UserButton afterSignOutUrl="/" />
                  <h6 className="text-xs text-white font-bold">Welcome, {user?.firstName || emailUsername}!</h6>

          </>
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
  );
}
