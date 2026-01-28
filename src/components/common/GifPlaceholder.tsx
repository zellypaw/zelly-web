import React from 'react';
import { Camera } from 'lucide-react';

interface GifPlaceholderProps {
  featureName: string;
  className?: string;
}

export default function GifPlaceholder({ featureName, className = '' }: GifPlaceholderProps) {
  return (
    <div className={`relative bg-zelly-bg-primary rounded-2xl overflow-hidden ${className}`}>
      {/* Aspect ratio container (16:9) */}
      <div className="aspect-video flex items-center justify-center">
        <div className="text-center px-8">
          <div className="mb-4 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-zelly-border flex items-center justify-center">
              <Camera className="w-10 h-10 text-zelly-text-tertiary" />
            </div>
          </div>
          <p className="text-zelly-text-secondary font-medium text-sm md:text-base">
            GIF 교체 예정: {featureName}
          </p>
          <p className="text-zelly-text-tertiary text-xs mt-2">
            실제 앱 동작 화면이 여기에 표시됩니다
          </p>
        </div>
      </div>
      
      {/* Corner label */}
      <div className="absolute top-4 right-4 bg-zelly-bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-full border border-zelly-border">
        <p className="text-xs font-medium text-zelly-text-tertiary">Placeholder</p>
      </div>
    </div>
  );
}
