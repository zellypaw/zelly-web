'use client';

import React from 'react';
import Button from '../common/Button';

export default function Navbar() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-primary font-display">
              ZELLY
            </h1>
          </div>

          {/* CTA Button */}
          <div>
            <Button onClick={scrollToForm} size="md">
              사전예약 하기
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
