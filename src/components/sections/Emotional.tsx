'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Emotional() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-24 md:py-32 bg-zelly-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-zelly-bg-secondary shadow-lg flex items-center justify-center">
              <Heart className="w-10 h-10 text-zelly-pink fill-zelly-pink" />
            </div>
          </div>

          {/* Emotional Message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zelly-text-primary mb-6 leading-relaxed">
            언젠가 사진밖에 남지 않을<br />
            순간이 옵니다.
          </h2>

          <p className="text-xl md:text-2xl text-zelly-text-secondary leading-relaxed">
            나중에 후회하지 않도록,<br />
            Zelly로 추억을 자산화하세요.
          </p>

          {/* Decorative element */}
          <div className="mt-12">
            <div className="text-6xl md:text-7xl opacity-60">🐕💕</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
