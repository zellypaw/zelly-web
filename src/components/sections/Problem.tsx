'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import iconImg from '@/app/icon.png';
import ScrollIndicator from '@/components/common/ScrollIndicator';

const PROBLEMS = [
  "어릴 땐 참 작았는데... 갤러리를 한참 올려봐도 그때 그 사진을 찾을 수가 없어요.",
  "정리해야지 마음먹고 갤러리를 열었다가도, 너무 많은 사진 숫자에 한숨 한 번 쉬고 조용히 화면을 닫게 됩니다.",
  "핸드폰을 바꾸면서 이전 폰을 백업을 해놨는데 그냥 외장 하드에 들어가서 보지를 않게 되네여.",
  "쉽고 재미있게 우리 아이 사진 정리를 할 수 있으면 좋겠는데 ... AI로 어떻게 안되나 …",
  "나중에 언젠가 이 아이가 가고나면 사진밖에 없을텐데 아무데나 사진을 보관하기도 좀 그렇고...",
  "지난번에 언니집에서 형부가 찍어준 사진이 진짜 잘 나왔는데, 카톡에는 만료되뿟네 ㅠㅠ",
  "가족들이 찍은 사진 그냥 앨범 같은데 하나로 관리하면 안되나 이모도 사진보고 싶어 하던데 …",
  "진짜 예쁜 사진이 많은데 인스타에 맨날 올릴 순 없고 가족들한테라도 좀 자랑하게 뭐가 있어야겠어"
];

export default function Problem() {
  return (
    <>
      {/* 1st Page: Visual Summary - Newly Designed */}
      <section id="problem-overview" className="relative h-[100dvh] flex items-center snap-start snap-always bg-zelly-bg-primary pt-[60px] pb-2 md:pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 text-center pb-2 md:pb-4 mt-[-2dvh] md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Problem Image at the Top */}
            <div className="w-full mb-4 md:mb-8 flex justify-center overflow-hidden">
              {/* Mobile Image: Slightly larger than screen width for better visibility */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="md:hidden relative w-[calc(100%+4rem)] -mx-8 aspect-[1041/1183] max-h-[72dvh]"
              >
                <Image
                  src="/images/problem/problem_mobile.webp"
                  alt="Problem situations mobile"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Desktop Image: Balanced size (max-w-6xl) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden md:block relative w-full max-w-6xl aspect-[1696/721]"
              >
                <Image
                  src="/images/problem/problem_desktop.webp"
                  alt="Problem situations desktop"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Tiny Triple Icons (Ellipsis-style separator) */}
            <div className="flex gap-1.5 md:gap-2 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-4 h-4 md:w-5 md:h-5 rounded-[22%] overflow-hidden shrink-0 opacity-20">
                  <Image
                    src={iconImg}
                    alt={`Zelly Icon ${i}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Main Message */}
            <div className="mb-2">
               <p className="text-xl md:text-2xl lg:text-2xl text-gray-900 leading-snug font-bold max-w-2xl mx-auto whitespace-pre-wrap break-keep">
                {"우리 아이와의 소중한 추억,\n혹시 방치되고 있지 않나요?"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2nd Page: Original Detailed Section - 100% Restored via Git Diff */}
      <section id="problem-section" className="relative h-[100dvh] bg-white snap-start snap-always flex items-center justify-center pt-[60px] pb-6 md:pb-12 overflow-hidden">
        <div className="max-w-4xl mx-auto w-full px-6 md:px-8 text-center pb-4 md:pb-0 mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Icon */}
            <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-[22%] overflow-hidden shrink-0 mb-6">
              <Image
                src={iconImg}
                alt="Zelly Icon"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-4 md:mb-8"
            >
               <p className="text-xl md:text-3xl lg:text-3xl text-gray-900 leading-tight font-bold max-w-4xl mx-auto whitespace-pre-wrap break-keep">
                {"우리 아이와의 소중한 추억들, \n이제 잊혀지지 않게 젤리가 도와드릴게요."}
              </p>
            </motion.div>

            {/* 3D Scrolling Problems */}
            <div className="w-full relative">
              <div 
                className="h-[240px] md:h-[200px] relative overflow-visible flex items-center justify-center [perspective:1000px] [--radius:110px]"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                  maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                }}
              >
                <motion.div 
                  className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
                  animate={{ rotateX: [0, 360] }}
                  transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {PROBLEMS.map((text, index) => {
                    const angle = (index / PROBLEMS.length) * 360;
                    return (
                      <div
                        key={index}
                        className="absolute w-full px-4 md:px-0 flex items-center justify-center"
                        style={{
                          transform: `rotateX(${angle}deg) translateZ(var(--radius))`,
                          backfaceVisibility: 'hidden',
                        }}
                      >
                        <div className="flex flex-col items-center justify-center w-full max-w-lg">
                          <p className="text-sm md:text-base lg:text-lg font-medium text-gray-400 leading-snug tracking-tight break-keep drop-shadow-sm italic text-center px-4 text-balance">
                            &quot;{text}&quot;
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator targetId="solution-section" />
      </section>
    </>
  );
}
