'use client';

// import Image from "next/image";
import { useUser } from '@clerk/nextjs';
import LandingPage from '@/components/LandingPage';
import HomePage from '@/components/HomePage';

export default function Home() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <LandingPage />;
  }

  // const emailUsername = user?.emailAddresses?.[0]?.emailAddress.split('@')[0];

  return (
    <HomePage />
  )
}
