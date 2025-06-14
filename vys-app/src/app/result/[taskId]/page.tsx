'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the ModelViewer to avoid SSR issues
const ModelViewer = dynamic(() => import('@/components/ModelViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
});

export default function ResultPage() {
  const { taskId } = useParams();
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/meshy/${taskId}`);
        const data = await res.json();
        
        if (data.error) throw new Error(data.error);
        if (!data.modelUrl) throw new Error('Model URL not found');
        
        setResult(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load results');
      } finally {
        setLoading(false);
      }
    };

    if (taskId) fetchResult();
  }, [taskId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading 3D model...</p>
          <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">3D Model Result</h1>
          <p className="text-gray-600 mt-2">Generated from your images</p>
          <Link href="/" className="text-blue-600 hover:underline text-sm mt-4 inline-block">
            ← Create another model
          </Link>
        </header>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">3D Model Viewer</h2>
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                {result.modelUrl ? (
                  <ModelViewer url={result.modelUrl} />
                ) : (
                  <p className="text-gray-500 h-full flex items-center justify-center">3D model not available</p>
                )}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                {result.thumbnailUrl ? (
                  <img
                    src={result.thumbnailUrl}
                    alt="3D Model Preview"
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="aspect-square flex items-center justify-center text-gray-500">
                    Preview not available
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Download</h2>
                <div className="space-y-3">
                  <a
                    href={result.modelUrl}
                    download={`3d-model-${taskId}.glb`}
                    className="block w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
                  >
                    Download GLB File
                  </a>
                  
                  <a
                    href={result.thumbnailUrl}
                    download={`preview-${taskId}.png`}
                    className="block w-full py-3 px-4 bg-gray-200 text-gray-800 rounded-lg text-center hover:bg-gray-300 transition-colors"
                  >
                    Download Preview Image
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Task ID:</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">{taskId}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}