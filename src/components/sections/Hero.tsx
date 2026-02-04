'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollIndicator from '@/components/common/ScrollIndicator';

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="relative min-h-screen bg-zelly-bg-secondary overflow-hidden snap-start flex items-center justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-zelly-pink/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-zelly-green/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-32 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Headline */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-md md:text-lg font-semibold text-zelly-text-secondary tracking-[0.05em] mb-12 md:mb-8 uppercase"
          >
            반려동물 라이프로그 플랫폼, <span className="text-zelly-pink">젤리</span>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.65rem] md:text-6xl lg:text-7xl font-black text-zelly-text-primary mb-12 leading-[1.15] tracking-[-0.03em] md:tracking-tight break-keep text-balance"
          >
            갤러리에 잠든 귀여움이<br />
            기록이 되는 순간
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-[1.075rem] lg:text-2xl text-zelly-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto font-medium break-keep text-balance"
          >
            지우기 아까운 수많은 순간들. 젤리의 AI 기술이 갤러리 속 사진과 영상을 완성된 디지털 앨범으로 만들어 드립니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Mobile: Single Pre-registration Button */}
            <div className="block sm:hidden">
              <button 
                onClick={scrollToForm}
                className="inline-block bg-zelly-pink text-white font-bold py-3 px-10 rounded-full hover:bg-zelly-pinkHover active:scale-95 transition-all duration-300 shadow-lg text-base"
              >
                사전 예약하기 →
              </button>
            </div>

            {/* Desktop: App Store Badges */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-8">
              <button 
                onClick={scrollToForm} 
                className="transition-transform hover:scale-105 active:scale-95 duration-200"
              >
                <div className="relative h-[44px] w-[146px]">
                  <Image
                    src="/assets/appstore.svg"
                    alt="Download on the App Store"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
              <button 
                onClick={scrollToForm} 
                className="transition-transform hover:scale-105 active:scale-95 duration-200"
              >
                <div className="relative h-[44px] w-[146px]">
                  <Image
                    src="/assets/googleplay.svg"
                    alt="Get it on Google Play"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator targetId="problem-section" />
    </section>
  );
}
