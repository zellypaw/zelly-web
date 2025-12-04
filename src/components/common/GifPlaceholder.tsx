import React from 'react';
import { Camera } from 'lucide-react';

interface GifPlaceholderProps {
  featureName: string;
  className?: string;
}

export default function GifPlaceholder({ featureName, className = '' }: GifPlaceholderProps) {
  return (
    <div className={`relative bg-secondary-100 rounded-2xl overflow-hidden ${className}`}>
      {/* Aspect ratio container (16:9) */}
      <div className="aspect-video flex items-center justify-center">
        <div className="text-center px-8">
          <div className="mb-4 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-secondary-200 flex items-center justify-center">
              <Camera className="w-10 h-10 text-secondary-400" />
            </div>
          </div>
          <p className="text-secondary-500 font-medium text-sm md:text-base">
            GIF 교체 예정: {featureName}
          </p>
          <p className="text-secondary-400 text-xs mt-2">
            실제 앱 동작 화면이 여기에 표시됩니다
          </p>
        </div>
      </div>
      
      {/* Corner label */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <p className="text-xs font-medium text-secondary-600">Placeholder</p>
      </div>
    </div>
  );
}
