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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline (Main Title) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-zelly-text-primary mb-8 leading-[1.1] tracking-tight"
          >
            갤러리에 잠든 귀여움이<br />기록이 되는 순간
            {/* <span className="text-zelly-pink">젤리</span> */}
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-zelly-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            우리 아이와 함께한 모든 순간을<br className="hidden md:block" />
            AI가 자동으로 기록하고 앨범으로 만들어 드립니다.
          </motion.p>

          {/* CTA Buttons (App Stores) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
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
