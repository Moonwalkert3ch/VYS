// import { SignUp } from '@clerk/nextjs'

// export default function Page() {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <SignUp appearance={{
//         elements: {
//           card: "sign-up-card-head bg_reverse p-6 rounded-xl shadow-xl",
//         }
//       }}/>
//     </div>
//   )
// }
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';

export default function SignUpPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const formRef = React.useRef<HTMLFormElement | null>(null);


  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#002D69] to-[#7C0003]">
      <div className="sign-up-card-head p-4 rounded-xl shadow-xl w-full max-w-md">       
        <SignUp.Root>
          <SignUp.Step name="start">
            <h1 className="text-2xl font-bold text-center text-gray-200 my-4">CREATE ACCOUNT</h1>

            <div className="flex flex-col items-center gap-4">
              <Clerk.Field
                name="emailAddress"
                className="w-full max-w-xs"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIdentifier(e.target.value)
                }>
                <Clerk.Label className="text-gray-200 mb-1">Email</Clerk.Label>
                <Clerk.Input className="w-full rounded-full" />
                <Clerk.FieldError className="text-sm text-red-500" />
              </Clerk.Field>

              <Clerk.Field name="password" className="w-full max-w-xs">
                <Clerk.Label className="text-gray-200 mb-1">Password</Clerk.Label>
                <Clerk.Input
                  type="password"
                  className="w-full rounded-full"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <Clerk.FieldError className="text-sm text-red-500" />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword" className="w-full max-w-xs">
                <Clerk.Label className="text-gray-200 mb-1">Confirm Password</Clerk.Label>
                <Clerk.Input
                  type="password"
                  className="w-full rounded-full"
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
                />
                <Clerk.FieldError className="text-sm text-red-500" />
              </Clerk.Field>

              {passwordError && (
                <div className="text-sm text-red-500 -mt-2">{passwordError}</div>
              )}

              <div id="clerk-captcha" />
              <SignUp.Action 
                submit
                className="bg-purple-700 hover:bg-purple-800 text-gray-200 font-normal py-1 px-4 rounded-full transition duration-200"
                onClick={(e) => {
                  if (password !== confirmPassword) {
                    e.preventDefault();
                    setPasswordError('Passwords do not match');
                  } else {
                    setPasswordError('');
                  }
                }}
              >Continue</SignUp.Action>
           
              <div className="flex items-center justify-center text-sm mt-4">
                <div className="text-gray-300">or</div>
                <Clerk.Connection
                  name="google"
                  className="flex text-blue-400 font-medium hover:underline ml-2">
                    <Clerk.Icon className="w-3 h-3 self-center" />
                    <span className="ml-1">Sign up with Google</span>
                </Clerk.Connection>
              </div>
            </div>
            <div className="mb-6 text-sm text-center text-gray-300">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-blue-400 font-medium hover:underline">
                SIGN-IN
              </Link>
            </div>
          </SignUp.Step>

          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-xl font-bold text-center text-gray-200 mb-1">Verify your email</h1>
                  <p className="text-center text-sm text-gray-300">
                    We've sent a code to <span className="font-semibold">{identifier}</span>.
                  </p>

                  <Clerk.Field name="code" className="w-full max-w-xs">
                    <Clerk.Label className="text-gray-300 mr-1">Email code:</Clerk.Label>
                    <Clerk.Input className="w-full rounded-full" />
                    <Clerk.FieldError className="text-sm text-red-500" />
                  </Clerk.Field>

                <SignUp.Action submit className="bg-purple-700 hover:bg-purple-800 text-gray-200 font-normal py-1 px-4 rounded-full transition duration-200">Continue</SignUp.Action>
              </div>
            </SignUp.Strategy>
          </SignUp.Step>
        </SignUp.Root>
      </div>
    </div>
  );
}
