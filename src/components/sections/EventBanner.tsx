'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function EventBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, height: 0, marginTop: 0, paddingTop: 0, paddingBottom: 0 }}
        className="w-full pt-2.5 pb-3 px-4 sm:px-6"
      >
        <div className="relative max-w-7xl mx-auto">
          <Link href="/event" className="block">
            <motion.div 
              className="relative bg-[#f8f9fb] rounded-2xl px-6 sm:px-10 shadow-sm border border-gray-100 overflow-hidden group h-[72px] sm:h-[84px]"
              whileHover={{ backgroundColor: "#f2f4f7", y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-row items-center justify-between sm:justify-center gap-3 sm:gap-6 h-full">
                {/* Text Content */}
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[10px] sm:text-sm font-medium text-gray-400 mb-0.5 tracking-tight">
                    젤리 런칭 이벤트
                  </span>
                  <p className="text-[#111827] font-bold text-[13px] sm:text-lg tracking-tight leading-tight sm:leading-none pr-6 sm:pr-0">
                    지금 사전 예약하면 <span className="text-zelly-pink font-extrabold underline decoration-zelly-pink/30 underline-offset-4">펫 리조트 숙박권</span> 증정! 🎁
                  </p>
                </div>

                {/* Event Image */}
                <div className="relative h-[65%] sm:h-full aspect-[1584/672] flex-shrink-0">
                  <Image 
                    src="/assets/event_banner.png"
                    alt="Event Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-zelly-text-secondary hover:text-zelly-pink transition-colors z-10"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
