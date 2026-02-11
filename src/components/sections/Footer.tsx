import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-transparent pt-2 pb-10 md:py-12">
      <Container>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 w-full">
          {/* Copyright */}
          <div className="w-full md:w-1/3 text-center md:text-left order-2 md:order-1">
            <p className="text-zelly-text-tertiary text-[11px] md:text-sm tracking-tight">
              © 2026 Zelly Team. All rights reserved.
            </p>
          </div>

          {/* Venture Mark - Absolutely centered with optical adjustment (nudge left) */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-ml-1.5 flex justify-center items-center order-1 md:order-2 transition-all duration-300">
            {/* Future option for multiple marks: 
                className="opacity-50 hover:opacity-100 grayscale hover:grayscale-0" 
            */}
            <Image
              src="/assets/venture_mark_wide.png"
              alt="혁신성장형 벤처기업 인증"
              width={140}
              height={46}
              className="h-8 md:h-8 w-auto object-contain"
            />
          </div>

          {/* Links - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex w-full md:w-1/3 justify-center md:justify-end gap-6 md:gap-8 order-3">
            <Link href="/contact" className="text-zelly-text-tertiary hover:text-zelly-text-primary text-xs md:text-sm transition-colors font-medium">
              Contact
            </Link>
            <Link href="/privacy" className="text-zelly-text-tertiary hover:text-zelly-text-primary text-xs md:text-sm transition-colors font-medium">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
