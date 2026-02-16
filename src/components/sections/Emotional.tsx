'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function Emotional() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8 }
  };

  const images = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <section className="relative h-[100dvh] flex flex-col items-center justify-between md:justify-center snap-start bg-zelly-bg-secondary pt-[60px] pb-2">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-[2vh] md:pt-0">
        <motion.div {...fadeInUp} className="text-center">
          {/* Icon */}
          <div className="mb-4 md:mb-8 flex justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-zelly-bg-secondary shadow-md flex items-center justify-center">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-zelly-pink fill-zelly-pink" />
            </div>
          </div>

          {/* Emotional Message */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-zelly-text-primary mb-4 md:mb-6 leading-tight">
            언젠가 사진밖에 남지 않을<br />
            순간이 옵니다.
          </h2>

          <p className="text-lg md:text-2xl text-zelly-text-secondary leading-relaxed mb-6 md:mb-10">
            소중한 순간이 잊혀지기 전에,<br />
            Zelly로 추억을 정리해 보세요.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/event"
              className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-zelly-pink text-white text-base md:text-lg font-bold rounded-full shadow-lg hover:bg-zelly-pinkHover transition-all duration-300"
            >
              지금 시작하기
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Pet Image Marquee - Full Width */}
      <motion.div 
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.2 }}
        className="overflow-hidden relative w-full h-[220px] md:h-64 bg-zelly-bg-secondary/50"
      >
        <div className="flex absolute whitespace-nowrap animate-marquee py-6 md:py-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-4 px-2">
              {images.map((num) => (
                <div 
                  key={`${i}-${num}`} 
                  className="w-40 h-40 md:w-56 md:h-56 relative rounded-xl overflow-hidden shadow-md flex-shrink-0"
                >
                  <Image
                    src={`/images/pets/pet-gen-${num}.webp`}
                    alt={`Pet ${num}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 160px, 224px"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
