"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      {isSignedIn ? (
        <UserButton {...({ afterSignOutUrl: "/" } as any)} />
      ) : (
        <>
          <SignInButton />
          <SignUpButton />
        </>
      )}
    </header>
  );
}
