'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ImageContextType {
  imgs: string[];
  setImgs: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function useImageContext() {
  const ctx = useContext(ImageContext);
  if (!ctx) throw new Error('useImageContext must be used within ImageProvider');
  return ctx;
}

export function ImageProvider({ children }: { children: ReactNode }) {
  const [imgs, setImgs] = useState<string[]>([]);
  return (
    <ImageContext.Provider value={{ imgs, setImgs }}>
      {children}
    </ImageContext.Provider>
  );
}
