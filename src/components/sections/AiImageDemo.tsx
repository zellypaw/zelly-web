'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RotateCcw, Download } from 'lucide-react';
import Button from '../common/Button';
import Container from '../common/Container';

const PROMPTS = [
  { id: 'superman', label: '슈퍼맨', emoji: '🦸‍♂️', text: '슈퍼맨 옷을 입혀줘' },
  { id: 'astronaut', label: '우주인', emoji: '👨‍🚀', text: '우주 비행사로 변신시켜줘' },
  { id: 'crown', label: '왕관', emoji: '👑', text: '머리에 왕관을 씌워줘' },
  { id: 'hat', label: '젠틀맨', emoji: '🎩', text: '멋진 모자를 씌워줘' },
];

export default function AiImageDemo() {
  const [selectedPrompt, setSelectedPrompt] = useState(PROMPTS[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isResultShown, setIsResultShown] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      setIsResultShown(true);
    }, 2000);
  };

  const handleReset = () => {
    setIsResultShown(false);
    setIsGenerating(false);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-pink-50 text-zelly-pink font-semibold text-sm"
          >
            AI 마법 체험하기 ✨
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            말하는 대로 변하는 우리 아이 사진
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            원하는 스타일을 선택하거나 직접 입력해보세요.<br />
            젤리 AI가 자연스럽게 사진을 수정해드립니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center bg-slate-50 rounded-[40px] p-6 md:p-12 overflow-hidden shadow-sm border border-slate-100">
          
          {/* Left/Top: Image Canvas */}
          <div className="w-full lg:w-1/2 aspect-[4/5] relative rounded-3xl overflow-hidden bg-slate-200 border-4 border-white shadow-xl">
            <AnimatePresence mode="wait">
              {!isResultShown ? (
                <motion.div
                  key="original"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center"
                >
                  <span className="text-8xl">🐕</span>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-white text-xs font-medium">Original</div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-pink-300 to-indigo-300 flex items-center justify-center"
                >
                  <span className="text-9xl">{selectedPrompt.emoji}</span>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-zelly-pink rounded-full text-white text-xs font-medium">AI Generated</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scanning Effect when generating */}
            <AnimatePresence>
              {isGenerating && (
                <motion.div 
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] z-20"
                />
              )}
            </AnimatePresence>

            {isGenerating && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] z-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-white font-bold text-lg drop-shadow-md">이미지 생성 중...</p>
                </div>
              </div>
            )}
          </div>

          {/* Right/Bottom: Controls */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {!isResultShown ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="mb-8">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Choose a transformation</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                    {PROMPTS.map((prompt) => (
                      <button
                        key={prompt.id}
                        onClick={() => setSelectedPrompt(prompt)}
                        className={`group relative p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                          selectedPrompt.id === prompt.id 
                            ? 'border-zelly-pink bg-white shadow-lg shadow-pink-100' 
                            : 'border-transparent bg-white hover:border-slate-200'
                        }`}
                      >
                        <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{prompt.emoji}</span>
                        <span className={`text-sm font-semibold ${selectedPrompt.id === prompt.id ? 'text-zelly-pink' : 'text-slate-600'}`}>
                          {prompt.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-inner mb-8">
                  <p className="text-xs text-slate-400 mb-2 font-medium">AI Prompt Analysis</p>
                  <p className="text-lg text-slate-700 font-medium">
                    &ldquo;{selectedPrompt.text}&rdquo;
                  </p>
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating}
                  className="w-full py-5 text-xl group"
                >
                  <span className="flex items-center justify-center gap-2">
                    이미지 생성하기 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold mb-6">
                  <Sparkles size={16} /> 멋진 작품이 탄생했어요!
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {selectedPrompt.emoji} {selectedPrompt.label} 모드 결과
                </h3>
                <p className="text-slate-500 mb-10">
                  앱을 다운로드하면 더 많은 스타일과<br className="hidden md:block" />
                  고해상도 원본 이미지를 받아볼 수 있습니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 py-4">
                    <span className="flex items-center justify-center gap-2">
                      <Download size={20} /> 이미지 저장하기
                    </span>
                  </Button>
                  <button 
                    onClick={handleReset}
                    className="flex-1 py-4 px-8 rounded-full border-2 border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-slate-600 font-bold"
                  >
                    <RotateCcw size={20} /> 다시 하기
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
