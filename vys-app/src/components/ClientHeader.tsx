"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ClientHeader() {
  const pathname = usePathname();
  const hideOnPaths = ["/sign-in", "/sign-up"];
  const showHeader = !hideOnPaths.includes(pathname);

  if (!showHeader) {
    return null;
  }

  return <Header />;
}
