'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface SolutionItem {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const solutions: SolutionItem[] = [
  {
    id: 1,
    title: "우리 아이의 마법 같은 변신",
    description: "젤리 AI로 우리 강아지를 특별한 주인공으로 만들어 보세요.\n호그와트 마법사부터 멋진 배트맨까지,\n배경은 지우고 소중한 순간만 남겨드립니다.",
    images: ["/images/ai-01.PNG", "/images/ai-02.PNG"]
  },
  {
    id: 2,
    title: "섞여 있어도 괜찮아요,\nAI가 다 아니까",
    description: "여러 마리를 키워도 '두부'인지 '콩이'인지\nAI가 얼굴을 식별하여 자동으로 분류합니다.\n찾고 싶은 아이의 사진만 쏙쏙 골라보세요.",
    images: ["/images/ai-01.PNG", "/images/ai-02.PNG"] // Placeholder
  },
  {
    id: 3,
    title: "우리 가족끼리만 보는\n시크릿 앨범",
    description: "인스타에 올리기엔 소소하지만, 지우긴 아까운 사진들.\n가족을 초대해서 함께 보고, 댓글도 남겨보세요.\n우리만의 소중한 추억 저장소가 됩니다.",
    images: ["/images/ai-01.PNG", "/images/ai-02.PNG"] // Placeholder
  }
];

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[9/18.5] max-w-[280px] mx-auto group">
      {/* Phone Frame Mockup - Improved for better fit */}
      <div className="absolute inset-0 border-[10px] border-gray-900 rounded-[3rem] shadow-2xl z-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl z-30 pointer-events-none" />
      
      {/* Screen Container with Padding to avoid clipping */}
      <div className="relative w-full h-full p-[2px] rounded-[2.8rem] overflow-hidden bg-gray-900">
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Feature screen ${currentIndex + 1}`}
                fill
                className="object-cover"
                sizes="280px"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-zelly-pink w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Solution() {
  return (
    <>
      {solutions.map((solution, index) => (
        <section 
          key={solution.id}
          className={`min-h-screen flex items-center py-20 snap-start overflow-hidden ${
            index % 2 === 1 ? 'bg-zelly-bg-secondary' : 'bg-zelly-bg-primary'
          }`}
        >
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20`}>
              {/* Image Slider Component (Always Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 w-full flex md:justify-end"
              >
                <div className="w-full max-w-sm flex justify-center">
                  <ImageSlider images={solution.images} />
                </div>
              </motion.div>

              {/* Text Content (Always Right) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full flex flex-col md:items-start"
              >
                <div className="max-w-md w-full">
                  <h3 className="text-3xl md:text-5xl font-bold text-zelly-text-primary mb-8 leading-tight break-keep">
                    {solution.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-lg md:text-xl text-zelly-text-secondary leading-relaxed whitespace-pre-line break-keep font-medium">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
