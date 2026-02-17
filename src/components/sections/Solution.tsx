'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
    title: "손쉬운 태깅으로\n원하는 사진을 즉시 검색",
    description: "AI가 사진을 분석해 스마트한 태그를 제안해드려요.\n쉽게 간편하게 태그로 원하는 사진을 관리하세요.",
    images: ["/images/screen/tag-01.webp", "/images/screen/tag-02.webp", "/images/screen/tag-03.webp"]
  },
  {
    id: 2,
    title: "반려생활의 모든 순간을 한눈에",
    description: "개월 수에 맞춰 자동으로 정리되는 앨범과 한눈에 보는 나만의 베스트컷, 채워가는 맛이 있는 달력뷰까지. 반려동물 라이프로그에 최적화된 UX",
    images: ["/images/screen/viewer-01.webp", "/images/screen/viewer-02.webp", "/images/screen/viewer-03.webp"] // Placeholder
  },
  {
    id: 3,
    title: "사진 정리가 즐거워지는 마법",
    description: "슬라이드 뷰로 넘기다 보면 어느새 사진 정리 끝! \n클라우드로 폰 용량은 가볍게, 보관은 안전하게!",
    images: ["/images/screen/upload-01.webp", "/images/screen/upload-02.webp"] // Placeholder
  },
  {
    id: 4,
    title: "사진 한 장으로 시작되는 우리 가족의 대화",
    description: "함께 올리고, 댓글과 이모지로 실시간 반응을 나눠보세요. 젤리가 온가족이 웃고 소통하는 공간이 됩니다.",
    images: ["/images/screen/family-01.webp", "/images/screen/family-02.webp", "/images/screen/family-03.webp"] // Placeholder
  },
  {
    id: 5,
    title: "우리 아이의 마법 같은 변신",
    description: "우리 강아지를 특별한 주인공으로 만들어 보세요.\n호그와트 마법사부터 멋진 배트맨까지,\n젤리 AI로 상상하는 모든 순간을 현실로!",
    images: ["/images/screen/ai-01.webp", "/images/screen/ai-02.webp", "/images/screen/ai-03.webp"]
  },
];

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const isInView = useInView(sliderRef, { amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, isInView]);

  return (
    <div ref={sliderRef} className="relative w-full max-w-[280px] mx-auto group">
      {/* Container that tightly wraps the image regardless of screen size */}
      <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-[0_0_0_5px_rgba(17,24,39,0.9),0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        
        {/* Ghost Image: This invisible image defines the perfect natural aspect ratio of your screenshots */}
        <Image
          src={images[0]}
          alt="Ratio helper"
          width={1125} // Standard high-res width
          height={2436} // Standard high-res height
          className="w-full h-auto invisible pointer-events-none"
          unoptimized
        />

        {/* Actual Slider: Sits perfectly on top of the ghost image */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`Feature screen ${currentIndex + 1}`}
                fill
                className="object-contain" // Sharp and perfect fit since parent matches ratio
                quality={100}
                priority
                unoptimized // No compression artifacts for text
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
          id={index === 0 ? "solution-section" : undefined}
          className={`h-[100dvh] flex items-center pt-[60px] pb-6 md:pb-12 snap-start overflow-hidden ${
            index % 2 === 0 ? 'bg-zelly-bg-secondary' : 'bg-zelly-bg-primary'
          }`}
        >
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mt-[-2dvh] md:mt-0">
            <div className={`flex flex-col md:flex-row items-center justify-center gap-0 lg:gap-20`}>
              {/* Text Content */}
              {/* Mobile: Always first | Desktop: Swaps to right if index is odd */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex-1 w-full flex flex-col items-center md:items-start ${
                  index % 2 === 1 ? 'md:order-2 md:items-start' : 'md:items-end'
                }`}
              >
                <div className="max-w-sm w-full text-center md:text-left">
                  <h3 className="text-2xl md:text-4xl font-bold text-zelly-text-primary mb-6 md:mb-8 leading-tight break-keep text-balance">
                    {solution.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br className="hidden md:block" />
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-sm md:text-lg text-zelly-text-secondary leading-relaxed break-keep font-medium opacity-90 px-6 md:px-0">
                    {solution.description.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </motion.div>

              {/* Image Slider Component */}
              {/* Mobile: Always second, smaller size, and has top margin | Desktop: Swaps to left if index is odd */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`flex-1 w-full flex justify-center mt-8 md:mt-0 ${
                  index % 2 === 1 ? 'md:order-1 md:justify-end' : 'md:justify-start'
                }`}
              >
                <div className="w-full max-w-[180px] md:max-w-sm flex justify-center md:scale-100">
                  <ImageSlider images={solution.images} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
