'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GifPlaceholder from '../common/GifPlaceholder';

export default function Solution() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1: AI Auto-Tagging */}
        <motion.div
          {...fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              섞여 있어도 괜찮아요,<br />
              AI가 다 아니까
            </h3>
            <p className="text-lg text-secondary-700 leading-relaxed">
              여러 마리를 키워도 &apos;두부&apos;인지 &apos;콩이&apos;인지<br />
              AI가 얼굴을 식별하여 자동으로 분류합니다.
            </p>
          </div>
          <div>
            <GifPlaceholder featureName="AI 자동 태깅 & 재식별" />
          </div>
        </motion.div>

        {/* Feature 2: AI Magic Editing */}
        <motion.div
          {...fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="order-2 md:order-1">
            <GifPlaceholder featureName="AI 매직 편집" />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              사람 지우개 & AI 변신
            </h3>
            <p className="text-lg text-secondary-700 leading-relaxed">
              집안 배경, 잠옷 입은 나는 지우고 강아지만 남기세요.<br />
              호그와트 마법사나 배트맨으로 변신도 가능합니다.
            </p>
          </div>
        </motion.div>

        {/* Feature 3: Private Family Album */}
        <motion.div
          {...fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              우리 가족끼리만 보는<br />
              시크릿 앨범
            </h3>
            <p className="text-lg text-secondary-700 leading-relaxed">
              인스타에 올리기엔 소소하지만, 지우긴 아까운 사진들.<br />
              가족을 초대해서 함께 보고, 댓글도 남겨보세요.
            </p>
          </div>
          <div>
            <GifPlaceholder featureName="가족 전용 앨범" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
