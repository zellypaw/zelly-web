'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../common/Button';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const scrollToForm = () => {
    if (pathname !== '/') {
      router.push('/#lead-form');
    } else {
      const formElement = document.getElementById('lead-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: '소개', href: '/' },
    { name: 'AI 데모', href: '/demo' },
    { name: '수요조사', href: '/survey' },
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

          {/* CTA Button */}
          <div className="flex items-center">
            <Button onClick={scrollToForm} size="sm" className="font-bold px-4 py-1.5 rounded-lg text-sm shadow-sm">
              사전예약 하기
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
