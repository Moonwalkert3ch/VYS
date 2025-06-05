"use client";

import { useState } from "react";
import { useSignUp, useClerk } from "@clerk/nextjs";
import Link from "next/link";

export default function CustomRegister() {
  const { signUp, isLoaded, setActive } = useSignUp();
  const { openSignIn } = useClerk();

  // We’ll call this field “emailOrUsername” in the UI.
  // If your Clerk org is set up to allow usernames, you can split logic
  // below to pass either: { emailAddress, password } or { username, password }.
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const trimmed = emailOrUsername.trim();
      let result: any;

      if (trimmed.includes("@")) {
        result = await signUp.create({
          emailAddress: trimmed,
          password,
        });
      } else {
        // Make sure you’ve enabled “Username” in Clerk dashboard → Users → Settings
        result = await signUp.create({
          username: trimmed,
          password,
        });
      }

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        window.location.href = "/dashboard";
      } else {
        console.log("More verification may be required:", result);
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Sign-up failed");
    }
  }

  async function handleGoogleRegister() {
    if (!isLoaded) return;

    await signUp.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/sso-callback",
    });
  }

    async function handleGithubRegister() {
    if (!isLoaded) return;

    await signUp.authenticateWithRedirect({
      strategy: "oauth_github",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/sso-callback",
    });
  }

  return (
    <div className="flex flex-col font-outfit items-center justify-center min-h-screen bg-gradient-to-b  from-blue-900 via-purple-900 to-red-900 text-white px-4">
      <img src="/vys_logo.png" alt="vys logo" className="w-logo mt-1 mb-8" />

      <img src="/3Dglasses.png" alt="3D Glasses" className="w-glasses -scale-x-100 mt-5 mb-5" />

      <h2 className="text-2xl font-extrabold text-center mt-4 mb-4">REGISTER ACCOUNT</h2>
      <form
        onSubmit={handleRegister}
          className="bg-[#3f2d4f] p-6 rounded-2xl shadow-lg w-full max-w-[22rem]"
      >
        <label className="block text-sm font-extrabold mb-2">
          username or email:
        </label>
        <input
          type="text"
          className="w-full p-1.5 rounded-xl text-white mb-2"
          style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
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
              onClick={handleGoogleRegister}
              className="w-[3rem] h-[3rem] bg-white rounded-md flex items-center justify-center"
            >
              <img src="/google-icon.svg" alt="Google" className="w-10 h-10" />
            </button>

            <button
              onClick={handleGithubRegister}
              className="w-[3rem] h-[3rem] bg-gray-800 rounded-md flex items-center justify-center"
            >
              <img src="/github-icon.svg" alt="GitHub" className="w-10 h-10 invert" />
            </button>
          </div>
      </form>

      <p className="font-bold text-sm mt-6 text-gray-300">
        Already Have An Account?{" "}
        <Link href="/sign-in">
          <button className="text-purple-400 font-extrabold">
            LOG IN
          </button>
        </Link>
      </p>
    </div>
  );
}
