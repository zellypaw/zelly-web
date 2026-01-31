'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

interface SubPageHeaderProps {
  backHref?: string;
  backText?: string;
}

export default function SubPageHeader({ 
  backHref = "/", 
  backText = "돌아가기" 
}: SubPageHeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-zelly-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        {/* Left: Back Button */}
        <div className="flex-1 flex justify-start">
          <Link 
            href={backHref} 
            className="flex items-center gap-1 text-zelly-text-secondary hover:text-zelly-text-primary transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium hidden sm:block">{backText}</span>
          </Link>
        </div>
        
        {/* Center: Logo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image 
            src="/assets/ZELLY.svg" 
            alt="ZELLY" 
            width={80} 
            height={24} 
            className="h-6 w-auto"
            priority
          />
        </div>

        {/* Right: Spacer for perfect centering */}
        <div className="flex-1" />
      </div>
    </nav>
  );
}
