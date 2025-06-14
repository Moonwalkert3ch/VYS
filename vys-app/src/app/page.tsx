'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TestPage() {
  const router = useRouter();
  const [taskId, setTaskId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('idle');
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const createTask = async () => {
    setIsLoading(true);
    setStatus('creating');
    setProgress(0);
    
    try {
      const res = await fetch('/api/meshy', { method: 'POST' });
      const data = await res.json();
      
      if (data.error) throw new Error(data.error);
      
      setTaskId(data.taskId);
      setStatus('created');
      checkStatus(data.taskId);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setIsLoading(false);
    }
  };

  const checkStatus = async (id: string) => {
    setStatus('checking');
    
    try {
      const res = await fetch(`/api/meshy/${id}`);
      const data = await res.json();
      
      if (data.error) throw new Error(data.error);
      
      // Update progress
      if (data.progress) {
        setProgress(data.progress);
      }
      
      if (data.status === 'SUCCEEDED') {
        setResult(data);
        setStatus('succeeded');
        setIsLoading(false);
      } else if (data.status === 'PENDING' || data.status === 'IN_PROGRESS') {
        setTimeout(() => checkStatus(id), 3000);
      } else {
        setStatus(data.status.toLowerCase());
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setIsLoading(false);
    }
  };

  const viewResults = () => {
    if (taskId) {
      router.push(`/result/${taskId}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Meshy API Test</h1>
        
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Test Images:</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a',
              'https://images.unsplash.com/photo-1570727624862-3008fe67a6be',
              'https://images.unsplash.com/photo-1661978039834-5fdeb00054f4',
              'https://images.unsplash.com/photo-1628583117576-a6f0f958d042'
            ].map((url, i) => (
              <img
                key={i}
                src={`${url}?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`}
                alt={`Angle ${i + 1}`}
                className="w-full h-24 object-cover rounded"
              />
            ))}
          </div>
        </div>
        
        <button
          onClick={createTask}
          disabled={isLoading}
          className={`w-full py-3 rounded font-medium ${
            isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition-colors mb-4`}
        >
          {isLoading ? 'Processing...' : 'Create 3D Model'}
        </button>
        
        {taskId && (
          <div className="mb-4 p-3 bg-gray-50 rounded text-sm">
            <p className="font-mono break-all">Task ID: {taskId}</p>
          </div>
        )}
        
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="font-medium">Status:</span>
            <span className={`font-semibold ${
              status === 'succeeded' ? 'text-green-600' : 
              status === 'error' ? 'text-red-600' : 'text-blue-600'
            }`}>
              {status.toUpperCase()}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-right text-sm text-gray-500 mt-1">
            {progress}%
          </div>
        </div>
        
        {status === 'succeeded' && (
          <div className="mt-6">
            <button
              onClick={viewResults}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              View 3D Results
            </button>
            
            <div className="mt-4 text-center">
              <a
                href={result.modelUrl}
                download={`3d-model.glb`}
                className="text-blue-600 hover:underline text-sm"
              >
                Download GLB File
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}