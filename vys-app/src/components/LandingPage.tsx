'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import { GLTFLoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import Image from 'next/image';

function GlassesModel() {
  const gltf = useLoader(GLTFLoader, '/assets/models/3d-glasses.gltf');
  return <primitive object={gltf.scene} scale={2.5} />;
}

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full bg text-white flex flex-col items-center justify-start px-4 pt-10 sm:pt-16 md:pt-20">
      {/* Hero Header */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center leading-tight mb-8">
        <span className="text-[#A1C9FF]">VYS</span>
        <span className="text-white">-ualize Your <br className="hidden sm:block" /> Secondhand Items Like <br className="hidden sm:block" /> Never Before</span>
      </h1>

      {/* 3D Model Canvas */}
      <div className="w-full max-w-4xl h-[250px] sm:h-[350px] md:h-[450px] mb-4">
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.8}>
              <GlassesModel />
            </Stage>
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Problem Section */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-center gap-2 px-4">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/images/problemhero.png"
            alt="Problem illustration"
            width={150}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>

          {/* Problem Text */}

        <div className="w-full md:w-2/3 animate-fade-in-right text-center md:text-left text-[#A1C9FF]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 border-b-4 border-blue-200 inline-block pb-1">
            The Problem
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            Many buyers and sellers are frustrated with not being able to fully inspect items online before buying.
            Repetitive requests for more photos or videos often waste time and discourage both sides.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-center gap-2 px-4 py-16">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/images/solutionhero.png"
            alt="Solution illustration"
            width={150}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>

          {/* Solution Text */}

        <div className="w-full md:w-2/3 animate-fade-in-right text-center md:text-left text-[#A1C9FF]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 border-b-4 border-blue-200 inline-block pb-1">
            The Solution
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            VYS allows sellers to turn item photos into interactive 3D models with AR viewing and AI-enhanced descriptions, making it easy for buyers to assess condition, scale, and fit with confidence.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full max-w-6xl flex flex-col items-center justify-center text-center shadow-md shadow-indigo-700 outline-violet-500 py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Ready to Transform Your Secondhand Experience?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Join the VYS community today and start visualizing your secondhand items like never before! 
        </p>
        <button className="bg_landing_outline text-[#A1C9FF] px-6 py-3 rounded-lg shadow-lg hover:bg-[#301C47] transition-colors">
          Get Started
        </button>
      </section>
      {/* Footer Section */}
      <footer className="w-full max-w-6xl text-center py-6 shadow-lg mt-10">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} VYSMarket. All rights reserved. Powered by NuEwa Tech
        </p>
      </footer>                        
    </main>
  );
}
// Note: The above code is a complete React component for a landing page that includes a 3D model of glasses, a hero header, and a problem section. It uses the `@react-three/fiber` library for rendering 3D content and `next/image` for optimized images.
// The component is designed to be responsive and visually appealing, with animations and a clean layout.
// The `GlassesModel` component loads a 3D model of glasses using the `GLTFLoader` and displays it within a `Canvas` from `@react-three/fiber`. The main landing page includes a hero section with a title, a 3D model, and a problem description section with an image and text.
// The component is styled using Tailwind CSS classes for a modern and clean design.
// The `LandingPage` component is exported as the default export, making it available for use in other parts of the application.
// The code is structured to be modular and maintainable, allowing for easy updates and additions in the future.
// The `Canvas` component provides a 3D rendering context, while the `Stage` component sets up the environment and lighting for the 3D model.
// The `OrbitControls` component allows users to interact with the 3D model by rotating and zooming, enhancing the user experience.
// The `Suspense` component is used to handle the loading state of the 3D model, ensuring a smooth user experience while the model is being loaded.
// The `Image` component from Next.js is used to optimize image loading and performance, ensuring that images are served in the best format and size for the user's device.
// The `LandingPage` component is designed to be used as a standalone page in a Next.js application, providing a visually appealing introduction to the VYS platform and its features.
// The component is responsive, adapting to different screen sizes and orientations, ensuring a consistent user experience across devices.
// The code is written in TypeScript, providing type safety and better development experience with autocompletion and error checking.
// The `LandingPage` component can be easily integrated into a Next.js application, making it a suitable choice for the landing page of the VYS platform.
// The `LandingPage` component can be further enhanced with additional sections, animations, and interactive elements to provide a richer user experience.