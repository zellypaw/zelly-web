'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  targetId: string;
  className?: string;
  color?: string;
  'data-testid'?: string;
}

export default function ScrollIndicator({ targetId, className = '', color = 'text-zelly-text-secondary/50', 'data-testid': testId }: ScrollIndicatorProps) {
  const scrollToTarget = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer ${className}`}
      onClick={scrollToTarget}
      data-testid={testId}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center gap-2"
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={color}
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
