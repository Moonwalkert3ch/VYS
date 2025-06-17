"use client";

import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function SsoCallbackPage() {
  const { signIn, isLoaded, setActive } = useSignIn();
  const router = useRouter();
  const [status, setStatus] = useState<"pending" | "error" | "done">("pending");

  useEffect(() => {
    if (!isLoaded) return;

    // Clerk will have appended something like ?code=…&state=… to the URL             
    signIn
      .authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: window.location.href,
        redirectUrlComplete: "/dashboard"
      })
      .catch(() => {
        setStatus("error");
      });
  }, [isLoaded, signIn, setActive, router]);

  if (status === "pending") {
    return <p className="text-white">Completing sign-in…</p>;
  }
  if (status === "error") {
    return <p className="text-red-400">There was an error. Please try again.</p>;
  }
  return null;
}
