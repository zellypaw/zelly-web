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
    { name: '공지사항', href: '/notice' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zelly-bg-secondary/80 backdrop-blur-lg border-b border-zelly-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px]">
          {/* Logo */}
          <Link 
              href="/"
              className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            >
            <div className="relative w-28 h-[28px] sm:w-36 sm:h-[36px]">
              <Image 
                src="/assets/logo_whole.svg" 
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
                    className="text-base font-bold transition-colors hover:text-zelly-text-primary text-zelly-text-secondary"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-bold transition-colors hover:text-zelly-text-primary ${
                    isActive ? 'text-zelly-text-primary' : 'text-zelly-text-secondary'
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
              className="text-zelly-text-secondary hover:text-zelly-text-primary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-zelly-bg-secondary/95 backdrop-blur-xl border-t border-zelly-border py-4 px-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
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
                    className="text-lg font-bold py-2 text-zelly-text-secondary hover:text-zelly-text-primary transition-colors"
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
                  className={`text-lg font-bold py-2 transition-colors hover:text-zelly-text-primary ${
                    isActive ? 'text-zelly-text-primary' : 'text-zelly-text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Added Mobile-only menu items */}
            <div className="pt-4 mt-4 border-t border-zelly-border flex flex-col space-y-4">
              <Link
                href="/privacy"
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold py-2 transition-colors hover:text-zelly-text-primary ${
                  pathname === '/privacy' ? 'text-zelly-text-primary' : 'text-zelly-text-secondary'
                }`}
              >
                개인정보처리방침
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold py-2 transition-colors hover:text-zelly-text-primary ${
                  pathname === '/contact' ? 'text-zelly-text-primary' : 'text-zelly-text-secondary'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
