'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-zelly-bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('problem-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-zelly-bg-primary overflow-hidden snap-start">
      {/* Background Spline 3D Scene - Sticky for stability */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="sticky top-0 h-screen w-full">
          <div className="absolute w-[calc(100%+120px)] h-[calc(100%+120px)] md:-bottom-18 -right-20 opacity-60">
            <Spline
              scene="https://prod.spline.design/SJudlP2qYsZKICJ4/scene.splinecode" 
            />
          </div>
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-zelly-bg-primary via-transparent to-zelly-bg-primary pointer-events-none" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-44 pb-32 md:pt-44 md:pb-24">
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
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-4">
              <button 
                onClick={scrollToForm} 
                className="transition-transform hover:scale-105 active:scale-95 duration-200"
              >
                <div className="relative h-[44px] w-[146px]">
                  <Image
                    src="/assets/appstore.png"
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
                    src="/assets/googleplay.png"
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

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2"
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-zelly-text-secondary/50"
          >
            <path d="M7 10l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
