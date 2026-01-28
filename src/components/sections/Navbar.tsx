'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: '소개', href: '/' },
    { name: 'AI 데모', href: '/demo' },
    { name: '설문조사 이벤트', href: 'https://tally.so/r/WORAGk' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-secondary-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px]">
          {/* Logo */}
          <Link 
              href="/"
              className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            >
            <div className="relative w-40 h-[38px]">
              <Image 
                src="/assets/zelly_title.png" 
                alt="ZELLY" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isExternal = link.href.startsWith('http');
              
              if (isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold transition-colors hover:text-secondary-900 text-secondary-500"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-bold transition-colors hover:text-secondary-900 ${
                    isActive ? 'text-secondary-900' : 'text-secondary-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-500 hover:text-secondary-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-secondary-100 py-4 px-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isExternal = link.href.startsWith('http');
              
              if (isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold py-2 text-secondary-500 hover:text-secondary-900 transition-colors"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold py-2 transition-colors hover:text-secondary-900 ${
                    isActive ? 'text-secondary-900' : 'text-secondary-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
