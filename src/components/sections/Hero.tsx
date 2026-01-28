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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-zelly-pink/20 text-zelly-pink text-sm font-semibold mb-8 shadow-sm"
          >
            <span className="mr-2">✨</span>
            AI가 자동으로 정리하는 우리 아이 성장앨범
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-secondary-900 mb-8 leading-[1.1] tracking-tight"
          >
            강아지 사진 정리,<br />
            <span className="text-zelly-pink">
              이제 AI에게 맡기세요.
            </span>
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-secondary-700 mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            매일 쌓이는 수천 장의 사진들 중에서<br className="hidden md:block" />
            소중한 순간만 쏙 골라 앨범으로 만들어 드릴게요.
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
            <div className="relative mx-auto max-w-[800px] aspect-[16/10] bg-white/30 backdrop-blur-md rounded-[40px] border border-white/50 shadow-2xl overflow-hidden group">
              {/* Inner content placeholder */}
              <div className="absolute inset-4 rounded-[32px] bg-white flex items-center justify-center border border-white/40 overflow-hidden">
                
                {/* Visualizing "AI Organizing" */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white shadow-xl flex items-center justify-center text-6xl md:text-8xl"
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
                className="absolute top-10 right-10 w-20 h-20 bg-white rounded-2xl shadow-lg border border-white flex items-center justify-center text-3xl"
              >
                📸
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-10 left-10 w-20 h-20 bg-white rounded-2xl shadow-lg border border-white flex items-center justify-center text-3xl"
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
