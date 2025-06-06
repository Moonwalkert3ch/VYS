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

  return (
    <div className="flex flex-col font-outfit items-center justify-center min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-blue-900 text-white px-4">
      <img src="/vys_logo.png" alt="vys logo" className="w-logo mt-1 mb-8" />

      <h2 className="text-2xl font-extrabold text-center mt-4 mb-6">CREATE ACCOUNT</h2>

      <div className="bg-[#3f2d4f] p-6 rounded-2xl shadow-lg w-full max-w-[22rem]">
        <SignUp.Root>
          <SignUp.Step name="start">
            <div className="flex flex-col gap-4">
              <Clerk.Field name="emailAddress">
                <Clerk.Label className="block text-lg font-extrabold mb-2">
                  email:
                </Clerk.Label>
                <Clerk.Input
                  className="w-full p-1.5 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setIdentifier(e.target.value)
                  }
                />
                <Clerk.FieldError className="text-xl text-red-400 mt-2" />
              </Clerk.Field>

              <Clerk.Field name="password">
                <Clerk.Label className="block text-lg font-extrabold mb-2">
                  password:
                </Clerk.Label>
                <Clerk.Input
                  type="password"
                  className="w-full p-1.5 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <Clerk.FieldError className="text-xl text-red-400 mt-2" />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword">
                <Clerk.Label className="block text-lg font-extrabold mb-2">
                  confirm password:
                </Clerk.Label>
                <Clerk.Input
                  type="password"
                  className="w-full p-1.5 rounded-xl text-white"
                  style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
                />
                <Clerk.FieldError className="text-xl text-red-400 mt-2" />
              </Clerk.Field>

              {passwordError && (
                <div className="text-sm text-red-400 -mt-2">{passwordError}</div>
              )}

              <div id="clerk-captcha" />
              
              <SignUp.Action 
                submit
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-extrabold py-2 rounded-xl"
                onClick={(e) => {
                  if (password !== confirmPassword) {
                    e.preventDefault();
                    setPasswordError('Passwords do not match');
                  } else {
                    setPasswordError('');
                  }
                }}
              >
                CONTINUE
              </SignUp.Action>
              
              <div className="text-center text-md font-extrabold text-gray-300">or</div>
              
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

                <Clerk.Connection
                  name="microsoft"
                  className="w-[3rem] h-[3rem] bg-gray-800 rounded-md flex items-center justify-center"
                >
                  <img src="/microsoft-icon.svg" alt="Microsoft" className="w-10 h-10" />
                </Clerk.Connection>

                <Clerk.Connection
                  name="facebook"
                  className="w-[3rem] h-[3rem] bg-gray-800 rounded-md flex items-center justify-center"
                >
                  <img src="/facebook-icon.svg" alt="Facebook" className="w-10 h-10" />
                </Clerk.Connection>
              </div>
            </div>
            
            <p className="font-bold text-sm mt-6 text-gray-300 text-center">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-purple-400 font-extrabold">
                SIGN-IN
              </Link>
            </p>
          </SignUp.Step>

          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <div className="flex flex-col items-center text-gray-200 gap-4">
                <h2 className="text-xl font-extrabold text-center mb-2">Verify your email</h2>
                <p className="text-center text-sm">
                  We've sent a code to <span className="font-semibold">{identifier}</span>.
                </p>

                <Clerk.Field name="code" className="w-full">
                  <Clerk.Label className="block text-sm font-extrabold mb-2">
                    Email code:
                  </Clerk.Label>
                  <Clerk.Input 
                    className="w-full p-1.5 rounded-xl text-white" 
                    style={{ backgroundColor: "rgba(158, 203, 255, 0.2)" }}
                  />
                  <Clerk.FieldError className="text-xl text-red-400 mt-2" />
                </Clerk.Field>

                <SignUp.Action 
                  submit 
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl"
                >
                  Continue
                </SignUp.Action>
              </div>
            </SignUp.Strategy>
          </SignUp.Step>
        </SignUp.Root>
      </div>
    </div>
  );
}
