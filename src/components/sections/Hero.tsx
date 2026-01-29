'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zelly-bg-primary">
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

          {/* Mockup Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative px-4"
          >
            <div className="relative mx-auto max-w-[800px] aspect-[16/10] bg-zelly-bg-secondary/30 backdrop-blur-md rounded-[40px] border border-zelly-bg-secondary/50 shadow-2xl overflow-hidden group">
              {/* Inner content placeholder */}
              <div className="absolute inset-4 rounded-[32px] bg-zelly-bg-secondary flex items-center justify-center border border-zelly-bg-secondary/40 overflow-hidden">
                
                {/* Visualizing "AI Organizing" */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-zelly-bg-secondary shadow-xl flex items-center justify-center text-6xl md:text-8xl"
                  >
                    🐶
                  </motion.div>
                  <div className="mt-8 space-y-3">
                    <div className="h-4 w-48 bg-zelly-pink/20 rounded-full animate-pulse"></div>
                    <div className="h-4 w-32 bg-zelly-pink/10 rounded-full animate-pulse mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 w-20 h-20 bg-zelly-bg-secondary rounded-2xl shadow-lg border border-zelly-bg-secondary flex items-center justify-center text-3xl"
              >
                📸
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-10 left-10 w-20 h-20 bg-zelly-bg-secondary rounded-2xl shadow-lg border border-zelly-bg-secondary flex items-center justify-center text-3xl"
              >
                🪄
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
