// components/ClientHeader.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ClientHeader() {
  const pathname = usePathname();
  const showHeader = pathname !== "/sign-in";

  if (!showHeader) {
    return null;
  }
  return <Header />;
}
