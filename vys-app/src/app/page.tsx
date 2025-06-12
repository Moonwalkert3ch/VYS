// import { auth, currentUser } from '@clerk/nextjs/server';

// export default async function Home() {
//   const { userId } = await auth();

//   if (!userId) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-blue-500 text-white">
//         <h1 className="text-2xl font-bold">Sign in to view this page</h1>
//       </main>
//     );
//   }

//   const user = await currentUser();
//   const emailUsername = user?.emailAddresses?.[0]?.emailAddress.split("@")[0];

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-blue-500 text-white flex-col text-center p-4">
//       <h1 className="text-4xl font-bold">Welcome, {user?.firstName || emailUsername}!</h1>
//       <h2 className="text-2xl mt-2">VYS Prototype</h2>
//     </main>
//   );
// }

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
