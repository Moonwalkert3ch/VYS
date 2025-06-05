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

    async function handleGithubLogin() {
    if (!isLoaded) return;

    await signIn.authenticateWithRedirect({
      strategy: "oauth_github",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/sso-callback",
    });
  }

  return (
    <div className="flex flex-col font-outfit items-center justify-center min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-blue-900 text-white px-4">
      <img src="/vys_logo.png" alt="vys logo" className="w-logo mt-1 mb-8" />

      <img src="/3Dglasses.png" alt="3D Glasses" className="w-glasses mt-5 mb-5" />

      <h2 className="text-2xl font-extrabold text-center mt-4 mb-4">LOGIN</h2>
        <form
          onSubmit={handleLogin}
          className="bg-[#3f2d4f] p-6 rounded-2xl shadow-lg w-full max-w-[22rem]"
        >
          {/* Change label & type */}
          <label className="block text-sm font-extrabold mb-2">username or email:</label>
          <input
            type="text"
            className="w-full p-1.5 rounded-xl text-white mb-2"
            style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />

          <label className="block text-sm font-extrabold mb-1">password:</label>
          <input
            type="password"
            className="w-full p-1.5 rounded-xl text-white mb-6"
            style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-xl text-red-400 mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl"
          >
            Submit
          </button>

          <div className="text-center my-4 text-sm text-gray-300">or</div>
          <div className="flex flex-row justify-center gap-2 mt-4 mb-2">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-[3rem] h-[3rem] bg-white rounded-md flex items-center justify-center"
            >
              <img src="/google-icon.svg" alt="Google" className="w-10 h-10" />
            </button>

            <button
              onClick={handleGithubLogin}
              className="w-[3rem] h-[3rem] bg-gray-800 rounded-md flex items-center justify-center"
            >
              <img src="/github-icon.svg" alt="GitHub" className="w-10 h-10 invert" />
            </button>
          </div>
        </form>

      <p className="font-bold text-sm mt-6 text-gray-300">
        Don’t have an account?{" "}
        <Link href="/sign-up">
          <button className="text-purple-400 font-extrabold">
            REGISTER
          </button>
        </Link>
      </p>
    </div>
  );
}
