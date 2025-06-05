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

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="sign-up-card-head p-6 rounded-xl shadow-xl w-full max-w-md">
        
        <SignUp.Root>
          <SignUp.Step name="start">
            <h1 className="text-xl font-bold text-center mb-4">CREATE ACCOUNT</h1>

            <div className="flex flex-col gap-4">
              <Clerk.Field
                name="emailAddress"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIdentifier(e.target.value)
                }>
                <Clerk.Label>Email</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <Clerk.Field name="password">
                <Clerk.Label>Password</Clerk.Label>
                <Clerk.Input type="password" />
                <Clerk.FieldError />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword">
                <Clerk.Label>Confirm Password</Clerk.Label>
                <Clerk.Input type="password" />
                <Clerk.FieldError />
              </Clerk.Field>

              <div id="clerk-captcha" className="my-4" />
              <SignUp.Action submit className="mt-4">Continue</SignUp.Action>
            </div>

            <div className="my-4 text-center text-sm text-gray-500">or</div>

            <Clerk.Connection name="google" className="mb-4">
              Sign up with Google
            </Clerk.Connection>

            <div className="mt-6 text-sm text-center text-gray-600">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-purple-600 font-medium hover:underline">
                SIGN-IN
              </Link>
            </div>
          </SignUp.Step>

          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <h1 className="text-lg font-semibold mb-2">Verify your email</h1>
                <p className="mb-4">
                    We've sent a code to <span className="font-semibold">{identifier}</span>.
                </p>

                <Clerk.Field name="code">
                  <Clerk.Label>Email code</Clerk.Label>
                  <Clerk.Input />
                  <Clerk.FieldError />
                </Clerk.Field>

                <SignUp.Action submit className="mt-4">Continue</SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
        </SignUp.Root>
      </div>
    </div>
  );
}
