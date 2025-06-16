'use client';
import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

type Props = { onCapture: (img: string) => void };

export default function WebcamCapture({ onCapture }: Props) {
  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) onCapture(imageSrc);
  }, [onCapture]);

  const videoConstraints = { facingMode: 'environment' };

  return (
    <div className="flex flex-col items-center space-y-2">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        mirrored={false}
        videoConstraints={videoConstraints}
        className="w-full max-w-md rounded-md"
      />
      <button
        onClick={capture}
        className="bg-indigo-600 text-white py-1 px-4 rounded"
      >
        Capture
      </button>
    </div>
  );
}
