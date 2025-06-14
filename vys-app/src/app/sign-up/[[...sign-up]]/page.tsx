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

import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

export default function SignUpPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const formRef = React.useRef<HTMLFormElement | null>(null);

  function GlassesModel() {
    const gltf = useLoader(GLTFLoader, '/assets/models/3d-glasses.gltf');
    return <primitive object={gltf.scene} scale={2.5} />;
  }

  return (
    <div className="flex justify-center items-center py-8 px-4 min-h-screen bg-gradient-to-b from-[#00204B] to-[#4D0002]">
      <div className="sign-up-card-head p-4 rounded-xl shadow-xl w-full max-w-md">     
        <SignUp.Root>
          <SignUp.Step name="start">
            {/* 3D Model Canvas */}
            <div className="w-full max-w-md h-[120px] overflow-hidden mb">

              <Canvas>
                <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.8}>
                    <GlassesModel /> {/* scale={1.5} or even 1.2 */}
                  </Stage>
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
            </div>


            <h1 className="font-Outfit font-bold text-2xl font-bold text-center text-gray-200 my-2">CREATE ACCOUNT</h1>

            <div className="flex flex-col items-center gap-4">
              <Clerk.Field
                name="emailAddress"
                className="w-full max-w-xs"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIdentifier(e.target.value)
                }>
                <Clerk.Label className="font-Outfit font-extrabold text-gray-200 pl-2 mb-2">Email</Clerk.Label>
                <Clerk.Input className="w-full rounded-full bg-blue-200 p-3" />
                <Clerk.FieldError className="text-sm text-red-500" />
              </Clerk.Field>

              <Clerk.Field name="password" className="w-full max-w-xs">
                <Clerk.Label className="font-Outfit font-extrabold text-gray-200 pl-2 mb-2">Password</Clerk.Label>
                <Clerk.Input
                  type="password"
                  className="w-full rounded-full bg-blue-200 p-3"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <Clerk.FieldError className="text-sm text-red-500" />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword" className="w-full max-w-xs">
                <Clerk.Label className="font-Outfit font-extrabold text-gray-200 pl-2 mb-2">Confirm Password</Clerk.Label>
                <Clerk.Input
                  type="password"
                  className="w-full rounded-full bg-blue-200 p-3"
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
           
              <div className="flex items-center justify-center font-bold text-xl mt-2">
                <div className="text-gray-300">sign up with</div>
                <Clerk.Connection
                  name="google"
                  className="flex text-blue-400 font-medium hover:underline ml-2">
                  <Clerk.Icon className="w-6 h-6 self-center" />
                </Clerk.Connection>

                <Clerk.Connection
                  name="microsoft"
                  className="flex text-blue-400 font-medium hover:underline ml-2">
                  <Clerk.Icon className="w-6 h-6 self-center" />
                </Clerk.Connection>

                <Clerk.Connection
                  name="facebook"
                  className="flex text-blue-400 font-medium hover:underline ml-2">
                  <Clerk.Icon className="w-6 h-6 self-center" />
                </Clerk.Connection>
              </div>
            </div>
            <div className="mt-4 mb-4 text-sm text-center text-gray-300">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-purple-600 font-outfit font-extrabold hover:underline">
                SIGN-IN
              </Link>
            </div>
          </SignUp.Step>

          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-xl font-bold text-center text-gray-200 mb-1">Verify your email</h1>
                  <p className="text-center text-sm text-gray-300">
                    We've sent a code to: <span className="font-semibold">{identifier}</span>
                  </p>

                  <Clerk.Field name="code" className="w-full max-w-xs">
                    <Clerk.Label className="font-Outfit font-extrabold text-gray-200 pl-2 mb-2">Email code:</Clerk.Label>
                    <Clerk.Input className="w-full rounded-full bg-blue-200 p-3" />
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