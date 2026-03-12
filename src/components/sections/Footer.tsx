import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-transparent pt-16 pb-12 md:pt-20 md:pb-16 border-t border-zelly-border/10 mt-20">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Top Row: Info & Links */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">
            {/* Business Info */}
            <div className="flex flex-col gap-4 text-left max-w-2xl">
              <h3 className="text-zelly-text-primary font-bold text-base md:text-lg tracking-tight">
                주식회사 젤리
              </h3>
              
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-zelly-text-tertiary leading-relaxed">
                  <span>사업자등록번호: 295-86-03593</span>
                  <span className="hidden xs:inline opacity-20 text-[10px]">|</span>
                  <span>대표: 신바울</span>
                </div>
                <p className="text-sm text-zelly-text-tertiary leading-relaxed">
                  경기도 의정부시 망월로 18-26 경기창업혁신공간 북부권 305호
                </p>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-zelly-text-tertiary leading-relaxed">
                  <Link href="/privacy" className="hover:text-zelly-text-primary transition-colors font-medium">
                    개인정보처리방침
                  </Link>
                  <span className="hidden xs:inline opacity-20 text-[10px]">|</span>
                  <Link href="/contact" className="hover:text-zelly-text-primary transition-colors font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Venture Mark */}
            <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
              <div className="flex justify-center items-center transition-all duration-300">
                <Image
                  src="/assets/venture_mark_wide.png"
                  alt="혁신성장형 벤처기업 인증"
                  width={140}
                  height={46}
                  className="h-8 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default -ml-1.5 md:ml-0"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row: Copyright & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zelly-border/5 gap-6">
            <p className="text-zelly-text-tertiary text-sm tracking-tight order-2 md:order-1">
              © 2026 ZELLY Co.,Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-5 order-1 md:order-2">
              <a 
                href="https://www.threads.com/@zelly.paul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center p-2 -m-2 opacity-40 hover:opacity-100 transition-all active:scale-95"
                aria-label="Threads"
              >
                <Image 
                  src="/assets/threads-logo-black.svg" 
                  alt="Threads" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5"
                />
              </a>
              <a 
                href="https://www.instagram.com/zelly.pet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center p-2 -m-2 opacity-40 hover:opacity-100 transition-all active:scale-95"
                aria-label="Instagram"
              >
                <Image 
                  src="/assets/instgram_logo.svg" 
                  alt="Instagram" 
                  width={22} 
                  height={22} 
                  className="w-5.5 h-5.5"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
