'use client';

import { Home, User, Mail, Bell, Store } from 'lucide-react';
import Link from 'next/link';

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#052958] text-[#A1C9FF] border-t border-[#6C0611] z-40">
      <ul className="flex justify-around items-center py-3 max-w-screen-md mx-auto">
        <Link href="/">
          <li className="flex flex-col items-center text-xs sm:text-sm cursor-pointer">
            <Home className="h-5 w-5 mb-1" />
            Home
          </li>
        </Link>
        <li className="flex flex-col items-center text-xs sm:text-sm cursor-pointer">
          <User className="h-5 w-5 mb-1" />
          Profile
        </li>
        <Link href="/messages">
          <li className="flex flex-col items-center text-xs sm:text-sm cursor-pointer">
            <Mail className="h-5 w-5 mb-1" />
            Inbox
          </li>
        </Link>
        <Link href="/notifications">
          <li className="flex flex-col items-center text-xs sm:text-sm cursor-pointer">
            <Bell className="h-5 w-5 mb-1" />
            Notifications
          </li>
        </Link>
        <Link href="/my-listings">
          <li className="flex flex-col items-center text-xs sm:text-sm cursor-pointer">
            <Store className="h-5 w-5 mb-1" />
            My VYS
          </li>
        </Link>
      </ul>
    </nav>
  );
}
// This component serves as a bottom navigation bar for the application.
// It includes icons and labels for Home, Profile, Search, Notifications, and My VYS.
// The navigation bar is styled with a fixed position at the bottom, a dark background, and light text color.
// The icons are imported from the 'lucide-react' library, providing a clean and modern look.