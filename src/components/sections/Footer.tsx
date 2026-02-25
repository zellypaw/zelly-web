import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-transparent pt-12 pb-10 md:py-12">
      <Container>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 w-full">
          {/* Copyright & Mobile Threads */}
          <div className="w-full md:w-1/3 text-center md:text-left order-2 md:order-1">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <p className="text-zelly-text-tertiary text-sm md:text-sm tracking-tight">
                © 2026 Zelly Team<span className="hidden md:inline">. All rights reserved.</span>
              </p>
              
              {/* Mobile unique: Socials inline */}
              <div className="md:hidden flex items-center gap-3">
                <span className="text-zelly-text-tertiary/20 text-xs">|</span>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.threads.com/@zelly5297" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center transition-opacity active:opacity-60"
                    aria-label="Threads"
                  >
                    <Image 
                      src="/assets/threads-logo-black.svg" 
                      alt="Threads" 
                      width={18} 
                      height={18} 
                      className="opacity-40"
                    />
                  </a>
                  <a 
                    href="https://www.instagram.com/zellypaw/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center transition-opacity active:opacity-60"
                    aria-label="Instagram"
                  >
                    <Image 
                      src="/assets/instgram_logo.svg" 
                      alt="Instagram" 
                      width={20} 
                      height={20} 
                      className="opacity-40"
                    />
                  </a>
                </div>
              </div>
            </div>
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
              className="h-8 md:h-8 w-auto object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default"
            />
          </div>

          {/* Links & Socials - Desktop only */}
          <div className="hidden md:flex w-full md:w-1/3 justify-end items-center gap-8 order-3">
            <Link href="/contact" className="text-zelly-text-tertiary hover:text-zelly-text-primary text-xs md:text-sm transition-colors font-medium">
              Contact
            </Link>
            <Link href="/privacy" className="text-zelly-text-tertiary hover:text-zelly-text-primary text-xs md:text-sm transition-colors font-medium">
              개인정보처리방침
            </Link>
            <a 
              href="https://www.threads.com/@zelly5297" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zelly-text-tertiary hover:text-zelly-text-primary transition-colors flex items-center justify-center"
              aria-label="Threads"
            >
              <Image 
                src="/assets/threads-logo-black.svg" 
                alt="Threads" 
                width={20} 
                height={20} 
                className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
            <a 
              href="https://www.instagram.com/zellypaw/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zelly-text-tertiary hover:text-zelly-text-primary transition-colors flex items-center justify-center"
              aria-label="Instagram"
            >
              <Image 
                src="/assets/instgram_logo.svg" 
                alt="Instagram" 
                width={20} 
                height={20} 
                className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
