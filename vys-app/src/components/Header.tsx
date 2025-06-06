"use client";

import Image from "next/image";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="bg_landing_outline flex justify-between items-center px-4 py-2 h-16 w-full">
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

      {/* Right side: Sign In/Sign Up or User Button */}
      <div className="flex items-center gap-4 text-sm sm:text-base">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <>
            <SignInButton>
              <span className="text-[#A1C9FF] hover:underline cursor-pointer">Sign In</span>
            </SignInButton>
            <SignUpButton>
              <span className="text-[#A1C9FF] hover:underline cursor-pointer">Sign Up</span>
            </SignUpButton>
          </>
        )}
      </div>
    </header>
  );
}
