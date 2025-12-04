'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

type DemoState = 'initial' | 'organizing' | 'complete';

export default function InteractiveDemo() {
  const [state, setState] = useState<DemoState>('initial');

  const handleOrganize = () => {
    setState('organizing');
    
    // 3초 후 완료 상태로 전환
    setTimeout(() => {
      setState('complete');
      
      // 1초 후 폼으로 스크롤
      setTimeout(() => {
        const formElement = document.getElementById('lead-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }, 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          {state === 'initial' && (
            <motion.div
              key="initial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo/Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="mb-8 flex justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-cta flex items-center justify-center shadow-2xl">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                강아지 사진만<br />
                <span className="text-yellow-300">33,422장</span>...
              </h1>

              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                AI가 3초 만에 자동으로 정리해드립니다
              </p>

              {/* Messy Photos Grid (before) */}
              <div className="grid grid-cols-4 gap-2 mb-10 max-w-md mx-auto">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: Math.random() * 20 - 10 }}
                    animate={{ opacity: 1, rotate: Math.random() * 20 - 10 }}
                    transition={{ delay: i * 0.05 }}
                    className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg shadow-lg"
                    style={{
                      transform: `rotate(${Math.random() * 20 - 10}deg)`,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-white text-2xl opacity-70">
                      🐕
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleOrganize}
                size="lg"
                className="text-xl px-12 py-5 shadow-2xl hover:shadow-primary/50"
              >
                AI로 사진 정리하기 ✨
              </Button>
            </motion.div>
          )}

          {state === 'organizing' && (
            <motion.div
              key="organizing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="py-20"
            >
              {/* Rotating Sparkle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="mb-8 flex justify-center"
              >
                <Sparkles className="w-24 h-24 text-yellow-300" />
              </motion.div>

              {/* Processing Text */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI 타임라인 정리 중...
              </h2>
              <p className="text-lg text-purple-200 mb-8">
                사진의 날짜와 반려동물을 인식하여<br />
                성장 기록을 생성합니다.
              </p>

              {/* Progress Bar */}
              <div className="max-w-md mx-auto">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                    className="h-full bg-gradient-to-r from-yellow-300 to-pink-400"
                  />
                </div>
              </div>

              {/* Pet Avatars Appearing */}
              <div className="mt-12 flex justify-center gap-4">
                {['초코', '두부'].map((name, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.5 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-300 to-pink-300 flex items-center justify-center shadow-xl">
                      <span className="text-3xl">🐕</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {i === 0 ? '21' : '31'}
                    </div>
                    <p className="text-white text-sm mt-2 font-medium">{name} 타임라인</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {state === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-20"
            >
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="mb-8 flex justify-center"
              >
                <CheckCircle2 className="w-24 h-24 text-green-400" />
              </motion.div>

              {/* Success Message */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                정리 완료! 🎉
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                33,422장의 사진이 깔끔하게 정리되었습니다
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">52장</div>
                  <div className="text-purple-200">새로운 사진 발견</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">2.4GB</div>
                  <div className="text-purple-200">저장공간 확보</div>
                </div>
              </div>

              {/* Next Step Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white/60 text-sm"
              >
                ↓ 사전예약하고 무료로 시작하기 ↓
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip Button (always visible) */}
      {state === 'initial' && (
        <button
          onClick={() => {
            const heroElement = document.querySelector('#hero-section');
            if (heroElement) {
              heroElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white text-sm transition-colors"
        >
          데모 건너뛰기 →
        </button>
      )}
    </section>
  );
}
