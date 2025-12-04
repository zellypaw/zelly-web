'use client';

import React from 'react';
import Button from '../common/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight"
          >
            강아지 사진만 33,422장...<br />
            언제 다 정리하나요?
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-secondary-700 mb-10 leading-relaxed"
          >
            용량 부족 경고, 이제 그만.<br className="md:hidden" />
            AI가 당신의 강아지 사진만 쏙 골라 '성장앨범'으로 만들어 드립니다.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button onClick={scrollToForm} size="lg" className="animate-pulse-subtle">
              3초 만에 AI 앨범 정리 시작하기
            </Button>
          </motion.div>

          {/* Visual Placeholder - Before/After comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="aspect-[9/16] bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center p-4">
                  <div className="text-6xl mb-4">😰</div>
                  <p className="font-bold text-red-500 text-lg mb-2">Storage Full</p>
                  <p className="text-secondary-600 text-sm">어지럽게 섞인 33,422장</p>
                </div>
              </div>
              <p className="text-center text-secondary-500 font-medium text-sm">Before</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="aspect-[9/16] bg-gradient-1 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center p-4">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="font-bold text-primary text-lg mb-2">Organized!</p>
                  <p className="text-secondary-600 text-sm">우리 강아지만 깔끔하게</p>
                </div>
              </div>
              <p className="text-center text-primary font-medium text-sm">After</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
