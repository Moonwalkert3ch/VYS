'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
// import dynamic from 'next/dynamic';
import { GLTFLoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';

// Component to load 3D model
function GlassesModel() {
  const gltf = useLoader(GLTFLoader, '/assets/models/3d-glasses.gltf');
  return <primitive object={gltf.scene} scale={2.5} />;
}

export default function LandingPage() {
  return (
    <main className="relative h-screen bg text-white flex flex-col items-center justify-center">
      <h1 className="absolute top-14 text-2xl sm:text-3xl md:text-5xl font-bold text-center leading-tight mb-0">
        <span className="text-[#A1C9FF]">VYS</span>
        <span className="text-white">-ualize Your <br /> Secondhand Items Like <br /> Never Before</span>
      </h1>

      <div className="absolute top-28 w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.8}>
              <GlassesModel />
            </Stage>
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
}
