'use client'

import Link from 'next/link';
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';

export default function SignInPage() {
  return (
    <div className="flex flex-col font-outfit items-center justify-center min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-blue-900 text-white px-4">
      <img src="/vys_logo.png" alt="vys logo" className="w-logo mt-1 mb-8" />

      <h2 className="text-2xl font-extrabold text-center mt-4 mb-6">LOGIN</h2>

      <div className="bg-[#3f2d4f] p-6 rounded-2xl shadow-lg w-full max-w-[22rem]">
        <SignIn.Root>
          {/* Combined email/password step */}
          <SignIn.Step name="start">
            <div className="flex flex-col gap-4">
              {/* Email Field */}
              <Clerk.Field name="identifier">
                <Clerk.Label className="block text-lg font-extrabold mb-2">
                  username or email:
                </Clerk.Label>
                <Clerk.Input
                  type="text"
                  className="w-full p-1.5 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                />
                <Clerk.FieldError className="text-sm text-red-400 mt-2" />
              </Clerk.Field>
              
              {/* Password Field */}
              <Clerk.Field name="password">
                <Clerk.Label className="block text-lg font-extrabold mb-2">
                  password:
                </Clerk.Label>
                <Clerk.Input
                  type="password"
                  className="w-full p-1.5 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                />
                <Clerk.FieldError className="text-sm text-red-400 mt-2" />
              </Clerk.Field>
              
              {/* Sign In Button */}
              <SignIn.Action 
                submit
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl mt-2"
              >
                Submit
              </SignIn.Action>
              
              {/* OAuth Divider */}
              <div className="text-center font-extrabold text-md text-gray-300">or</div>
              
              {/* Social Login Buttons */}
              <div className="flex flex-row justify-center gap-2">
                <Clerk.Connection
                  name="google"
                  className="w-[3rem] h-[3rem] bg-white rounded-md flex items-center justify-center"
                >
                  <img src="/google-icon.svg" alt="Google" className="w-10 h-10" />
                </Clerk.Connection>
                
                <Clerk.Connection
                  name="github"
                  className="w-[3rem] h-[3rem] bg-gray-800 rounded-md flex items-center justify-center"
                >
                  <img src="/github-icon.svg" alt="GitHub" className="w-10 h-10 invert" />
                </Clerk.Connection>
              </div>
            </div>
            
            {/* Additional Links */}
            <p className="font-bold text-sm mt-6 text-gray-300 text-center">
              Don't have an account?{' '}
              <Link href="/sign-up" className="text-purple-400 font-extrabold">
                REGISTER
              </Link>
            </p>
            
            <div className="mt-4 text-center">
              <SignIn.Action 
                navigate="forgot-password" 
                className="text-sm text-purple-400 font-extrabold hover:underline"
              >
                Forgot password?
              </SignIn.Action>
            </div>
          </SignIn.Step>

          {/* Verification Step */}
          <SignIn.Step name="verifications">
            <SignIn.Strategy name="email_code">
              <div className="flex flex-col items-center text-gray-200 gap-4">
                <h2 className="text-xl font-extrabold text-center mb-2">Check your email</h2>
                <p className="text-center text-sm">We sent a code to <SignIn.SafeIdentifier />.</p>

                <Clerk.Field name="code" className="w-full">
                  <Clerk.Label className="block text-sm font-extrabold mb-2">Email code:</Clerk.Label>
                  <Clerk.Input 
                    className="w-full p-1.5 rounded-xl text-white" 
                    style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                  />
                  <Clerk.FieldError className="text-xl text-red-400 mt-2" />
                </Clerk.Field>

                <SignIn.Action 
                  submit 
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl"
                >
                  Continue
                </SignIn.Action>
              </div>
            </SignIn.Strategy>

            <SignIn.Strategy name="reset_password_email_code">
              <div className="flex flex-col text-gray-200 items-center gap-4">
                <h2 className="text-xl font-extrabold text-center mb-2">Check your email</h2>
                <p className="text-center text-sm">We sent a code to <SignIn.SafeIdentifier />.</p>

                <Clerk.Field name="code" className="w-full">
                  <Clerk.Label className="block text-sm font-extrabold mb-2">Email code:</Clerk.Label>
                  <Clerk.Input 
                    className="w-full p-1.5 rounded-xl text-white" 
                    style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                  />
                  <Clerk.FieldError className="text-xl text-red-400 mt-2" />
                </Clerk.Field>

                <SignIn.Action 
                  submit 
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl"
                >
                  Continue
                </SignIn.Action>
              </div>
            </SignIn.Strategy>
          </SignIn.Step>

          {/* Forgot Password Step */}
          <SignIn.Step name="forgot-password">
            <div className="flex flex-col text-gray-200 gap-4">
              <h2 className="text-xl font-extrabold text-center mb-1">Forgot your password?</h2>
              
              <div className="text-sm text-center mb-4">
                Enter your email to receive a password reset link
              </div>

              <Clerk.Field name="identifier" className="w-full">
                <Clerk.Label className="block text-sm font-extrabold mb-2">
                  username or email:
                </Clerk.Label>
                <Clerk.Input 
                  type="text" 
                  className="w-full p-1.5 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                />
                <Clerk.FieldError className="text-xl text-red-400 mt-2" />
              </Clerk.Field>

              <SignIn.Action 
                submit 
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl"
              >
                Send reset link
              </SignIn.Action>
              
              <SignIn.Action 
                navigate="previous" 
                className="text-sm text-purple-400 font-extrabold hover:underline text-center mt-4"
              >
                Back to sign in
              </SignIn.Action>
            </div>
          </SignIn.Step>

          {/* Reset Password Step */}
          <SignIn.Step name="reset-password">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-extrabold text-center text-gray-200 mb-2">Reset your password</h2>

              <Clerk.Field name="password" className="w-full">
                <Clerk.Label className="block text-sm font-extrabold mb-2">New password:</Clerk.Label>
                <Clerk.Input 
                  type="password" 
                  className="w-full p-1.5 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                />
                <Clerk.FieldError className="text-xl text-red-400 mt-2" />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword" className="w-full">
                <Clerk.Label className="block text-sm font-extrabold mb-2">Confirm password:</Clerk.Label>
                <Clerk.Input 
                  type="password" 
                  className="w-full p-1.5 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                />
                <Clerk.FieldError className="text-xl text-red-400 mt-2" />
              </Clerk.Field>

              <SignIn.Action 
                submit 
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl"
              >
                Reset password
              </SignIn.Action>
            </div>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
  )
}
