'use client';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useProgress } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export default function ModelViewer({ url }: { url: string }) {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { progress } = useProgress();
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let isMounted = true;
    let gltfLoader: GLTFLoader | null = null;
    
    const loadModel = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Create a proxy to handle CORS issues
        const proxyUrl = `/api/proxy?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
          throw new Error('Failed to load model');
        }
        
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        
        // Load the model using GLTFLoader
        gltfLoader = new GLTFLoader();
        gltfLoader.load(
          objectUrl,
          (gltf) => {
            if (isMounted) {
              // Scale and position the model
              gltf.scene.scale.set(0.5, 0.5, 0.5);
              gltf.scene.position.set(0, 0, 0);
              setModel(gltf.scene);
              setLoading(false);
            }
            URL.revokeObjectURL(objectUrl);
          },
          undefined,
          (error) => {
            if (isMounted) {
              console.error('Error loading model:', error);
              setError('Failed to load 3D model');
              setLoading(false);
            }
            URL.revokeObjectURL(objectUrl);
          }
        );
      } catch (err) {
        if (isMounted) {
          console.error('Error loading model:', err);
          setError('Failed to load 3D model');
          setLoading(false);
        }
      }
    };

    loadModel();
    
    return () => {
      isMounted = false;
      if (gltfLoader) {
        // Clean up loader
        gltfLoader.manager.handlers = [];
      }
    };
  }, [url]);

  // Model component to render inside Canvas
  const ModelComponent = () => {
    const ref = useRef<THREE.Group>(null);
    
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.005;
      }
    });
    
    return model ? <primitive ref={ref} object={model} /> : null;
  };

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gray-100 relative" ref={canvasRef}>
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-80 z-10">
          <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-3 text-gray-600">Loading {Math.round(progress)}%</p>
        </div>
      )}
      
      <Canvas 
        camera={{ 
          position: [1, 1, 2], 
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#f3f4f6'); // Set canvas background color
        }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={null}>
          <ModelComponent />
          <OrbitControls 
            enableZoom={true} 
            enablePan={true}
            minDistance={0.5}
            maxDistance={5}
          />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}