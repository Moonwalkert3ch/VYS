// app/sign-in/page.tsx
"use client";

import { useState } from "react";
import { useSignIn, useClerk } from "@clerk/nextjs";
import Link from "next/link";

export default function CustomLogin() {
  const { signIn, isLoaded, setActive } = useSignIn();
  const { openSignUp } = useClerk();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: identifier.trim(), // <-- username OR email
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        window.location.href = "/dashboard";
      } else {
        console.log("More verification needed:", result);
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Login failed");
    }
  }

  async function handleGoogleLogin() {
    if (!isLoaded) return;

    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/sso-callback",
    });
  }

  return (
    <div className="flex flex-col font-outfit items-center justify-center min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-blue-900 text-white px-4">
      <img src="/vys_logo.png" alt="vys logo" className="w-64 mb-4" />

      <h2 className="text-xl font-bold text-center mb-4">LOGIN</h2>
      <form
        onSubmit={handleLogin}
        className="bg-[#3f2d4f] p-6 rounded-2xl shadow-lg w-full max-w-sm"
      >
        {/* Change label & type */}
        <label className="block text-sm font-semibold mb-1">
          Username or Email:
        </label>
        <input
          type="text"
          className="w-full p-2 rounded-md bg-[#4e3a60] text-white mb-4"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="your username or email"
        />

        <label className="block text-sm font-semibold mb-1">Password:</label>
        <input
          type="password"
          className="w-full p-2 rounded-md bg-[#4e3a60] text-white mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-sm text-red-400 mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-md"
        >
          Submit
        </button>

        <div className="text-center my-4 text-sm text-gray-300">or</div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black font-semibold py-2 rounded-md flex items-center justify-center gap-2"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>
      </form>

      <p className="text-sm mt-6 text-gray-300">
        Don’t have an account?{" "}
        <Link href="/sign-up">
          <button className="text-purple-400 font-semibold">
            REGISTER
          </button>
        </Link>
      </p>
    </div>
  );
}
