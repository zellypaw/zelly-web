'use client';

import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';

export default function Navbar() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-24 h-8 md:w-32 md:h-10">
              <Image 
                src="/assets/zelly_title.png" 
                alt="ZELLY" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <Button onClick={scrollToForm} size="md" className="font-bold px-6 py-2.5 rounded-xl shadow-md">
              사전예약 하기
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
