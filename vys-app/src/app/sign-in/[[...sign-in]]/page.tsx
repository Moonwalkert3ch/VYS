// import { SignIn } from '@clerk/nextjs';

// export default function Page() {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//         <SignIn appearance={{
//           elements: {
//             card: "sign-in-card-head bg p-6 rounded-xl shadow-xl",
//           },
//         }} />
//     </div>
//   );
// }
'use client'

import Link from 'next/link';
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="sign-in-card-head p-6 rounded-xl shadow-xl w-full max-w-md">
        
        <SignIn.Root>
          {/* Step 1: Enter email */}
          <SignIn.Step name="start">
            <h1 className="text-2xl font-bold text-center text-gray-200 mb-4">LOGIN</h1>
              <div className="flex flex-col items-center gap-4">
                <Clerk.Field name="identifier" className="w-full max-w-xs">
                  <Clerk.Label className=" text-gray-200 mb-1">Email</Clerk.Label>
                  <Clerk.Input className="w-full rounded-full" />
                  <Clerk.FieldError className="text-sm text-red-500" />
                </Clerk.Field>
                <SignIn.Action submit className="bg-purple-600 hover:bg-purple-700 text-gray-200 font-normal py-1 px-4 rounded-full transition duration-200">Continue</SignIn.Action>
                <div className="flex items-center justify-center text-sm mt-6">
                  <div className=" text-gray-400">or</div>
                  <Clerk.Connection
                    name="google"
                    className="flex text-purple-600 font-medium hover:underline ml-2">
                      <Clerk.Icon className="w-3 h-3 self-center" />
                      <span className="ml-1">Sign in with Google</span>
                  </Clerk.Connection>
                </div>
              </div>
              <div className="mt-2 text-sm text-center text-gray-400">
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" className="text-purple-600 font-medium hover:underline">
                  SIGN-UP
                </Link>
              </div>
          </SignIn.Step>

          {/* Step 2: Either email code or password */}
          <SignIn.Step name="verifications">
            <SignIn.Strategy name="email_code">
              <div className="flex flex-col items-center text-gray-200 gap-4">
                <h1 className="text-xl font-bold text-center mb-2">Check your email</h1>
                <p className="text-center text-sm">We sent a code to <SignIn.SafeIdentifier />.</p>

                <Clerk.Field name="code">
                  <Clerk.Label className="text-gray-300 mr-1">Email code:</Clerk.Label>
                  <Clerk.Input className="w-full rounded-full text-gray-900" />
                  <Clerk.FieldError className="text-sm text-red-500" />
                </Clerk.Field>

                <SignIn.Action submit className="bg-purple-700 hover:bg-purple-800 text-gray-200 font-normal py-1 px-4 rounded-full transition duration-200">Continue</SignIn.Action>
              </div>
            </SignIn.Strategy>

            <SignIn.Strategy name="password">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-center text-gray-200 mb-4">Enter your password</h1>

                <div className="flex flex-col items-center gap-4">
                <Clerk.Field name="password" className="w-full max-w-xs">
                  <Clerk.Label className=" text-gray-200 mb-1">Password</Clerk.Label>
                  <Clerk.Input className="w-full rounded-full" />
                  <Clerk.FieldError className="text-sm text-red-500" />
                </Clerk.Field>

                <SignIn.Action submit className="bg-purple-600 hover:bg-purple-700 text-gray-200 font-normal py-1 px-4 mb-6 rounded-full transition duration-200">Sign In</SignIn.Action>
                <SignIn.Action navigate="forgot-password" className="text-sm text-purple-600 text-center underline">Forgot password?</SignIn.Action>
                </div>
              </div>
            </SignIn.Strategy>

            <SignIn.Strategy name="reset_password_email_code">
              <div className="flex flex-col text-gray-200 items-center gap-4">
                <h1 className="text-xl font-bold text-center mb-2">Check your email</h1>
                <p className="text-center text-sm">We sent a code to <SignIn.SafeIdentifier />.</p>

                <Clerk.Field name="code">
                  <Clerk.Label className="text-gray-300 mr-1">Email code:</Clerk.Label>
                  <Clerk.Input className="w-full rounded-full text-gray-900" />
                  <Clerk.FieldError className="text-sm text-red-500" />
                </Clerk.Field>

                <SignIn.Action submit className="bg-purple-700 hover:bg-purple-800 text-gray-200 font-normal py-1 px-4 rounded-full transition duration-200">Continue</SignIn.Action>
              </div>
            </SignIn.Strategy>
          </SignIn.Step>

          {/* Step 3: Forgot password */}
          <SignIn.Step name="forgot-password">
            <div className="flex flex-col text-gray-200 gap-4">
              <h1 className="text-xl font-bold text-center mb-1">Forgot your password?</h1>

              <SignIn.SupportedStrategy name="reset_password_email_code">
                Reset password
              </SignIn.SupportedStrategy>

              <SignIn.Action navigate="previous">Go back</SignIn.Action>
            </div>
          </SignIn.Step>

          {/* Step 4: Reset password */}
          <SignIn.Step name="reset-password">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold text-center text-gray-200 mb-2">Reset your password</h1>

              <Clerk.Field name="password">
                <Clerk.Label className="text-gray-300">New password</Clerk.Label>
                <Clerk.Input className="w-full rounded-full" />
                <Clerk.FieldError className="text-sm text-red-500" />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword">
                <Clerk.Label className="text-gray-300">Confirm password</Clerk.Label>
                <Clerk.Input className="w-full rounded-full" />
                <Clerk.FieldError className="text-sm text-red-500" />
              </Clerk.Field>

              <SignIn.Action submit className="bg-purple-700 hover:bg-purple-800 text-gray-200 font-normal py-1 px-4 rounded-full transition duration-200 self-center">Reset password</SignIn.Action>
            </div>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
  )
}
