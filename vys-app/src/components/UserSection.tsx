// components/UserSection.tsx
"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"

export default function UserSection() {
  const { isSignedIn, user } = useUser()

  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton {...({ afterSignOutUrl: "/" } as any)} />
      </SignedIn>
    </header>
  )
}
