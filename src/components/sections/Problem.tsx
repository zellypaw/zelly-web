'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { AlertTriangle, Search, CloudOff } from 'lucide-react';

export default function Problem() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  return (
    <section id="problem-section" className="py-16 md:py-24 bg-zelly-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zelly-text-primary mb-4">
            지우긴 아깝고, 찾기는 힘들고...<br />
            디지털 호더링을 겪고 계신가요?
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card
              icon={<AlertTriangle className="w-12 h-12 text-red-400" />}
              title="저장 공간 부족의 스트레스"
              description="33,422장의 사진으로 가득 찬 휴대폰, 소중한 순간 담을 공간이 없어요"
            />
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card
              icon={<Search className="w-12 h-12 text-orange-400" />}
              title="수천 장 속 인생샷 찾기"
              description="수천 장 속에 파묻힌 우리 아이 인생샷, 찾으려면 한참 스크롤..."
            />
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card
              icon={<CloudOff className="w-12 h-12 text-blue-400" />}
              title="복잡한 백업, 미루다 날린 추억"
              description="클라우드는 복잡하고, 백업은 귀찮아서 미루다가 영영 잃어버린 소중한 사진들"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
