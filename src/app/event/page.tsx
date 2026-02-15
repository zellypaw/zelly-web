'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Gift, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LeadForm from '@/components/sections/LeadForm';

export default function EventPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      
      {/* Content Container - Narrow layout like a product detail page */}
      <div className="max-w-[720px] mx-auto bg-white min-h-screen shadow-sm">
        
        {/* Simple & Clean Hero */}
        <section className="relative overflow-hidden pt-12">
          <div className="px-6 text-center mb-10">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-3 py-1 rounded-full bg-zelly-bg-primary text-zelly-pink text-[11px] font-bold tracking-widest mb-4 border border-zelly-pink/10 uppercase">
                Launching Event
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-zelly-text-primary mb-4 tracking-tight leading-tight">
                ZELLY 사전 예약<br />
                <span className="text-zelly-pink">펫 리조트 숙박권</span> 증정
              </h1>
              <p className="text-base text-zelly-text-secondary font-medium">
                지금 사전 예약하고 소중한 아이와 함께하는<br />
                특별한 펫 리조트 여행의 기회를 잡으세요.
              </p>
            </motion.div>
          </div>
          
          <div className="relative h-[400px] w-full px-6">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/event_hero.png"
                alt="Luxury Pet Resort"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Prize Showcase Section - Vertical focused layout */}
        <section className="py-20 px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-zelly-text-primary mb-12 leading-tight">
              사전 예약자만을 위한<br />
              <span className="text-zelly-pink">스페셜 베네핏</span>
            </h2>

            {/* Ticket UI - Centered */}
            <div className="max-w-md mx-auto mb-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-[#1c2e4a] p-8 rounded-[2rem] shadow-2xl relative overflow-hidden text-white border border-white/10 group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12">
                    <Gift size={120} />
                  </div>
                  
                  <div className="relative z-10 text-left">
                    <div className="border-b border-white/10 pb-6 mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-blue-300 text-[10px] font-bold tracking-widest uppercase mb-1">Invitation Ticket</p>
                          <h4 className="text-xl font-black italic">PET RESORT STAY</h4>
                        </div>
                        <div className="px-2 py-0.5 bg-yellow-400 text-black text-[9px] font-black rounded italic">VIP ONLY</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between text-xs">
                        <span className="text-white/50 font-medium">Benefit</span>
                        <span className="font-bold">1 Night Voucher</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/50 font-medium">Location</span>
                        <span className="font-bold">Sono Pet / Kensington</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-6 border-t border-dashed border-white/20">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-300" />
                      </div>
                      <p className="text-[11px] text-blue-300 font-medium tracking-tight">
                        ZELLY 사전 예약자 추첨 증정
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-white rounded-full" />
                </div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 text-left max-w-md mx-auto">
              <div className="p-6 bg-zelly-bg-primary rounded-2xl flex gap-4 border border-zelly-border">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-zelly-pink">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zelly-text-primary mb-1">펫 리조트 1박 숙박권 (3명)</h3>
                  <p className="text-sm text-zelly-text-secondary leading-relaxed">
                    소노펫, 켄싱턴 등 국내 최고급 펫 프렌들리 리조트 숙박권을 드립니다.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-zelly-bg-primary rounded-2xl flex gap-4 border border-zelly-border">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-zelly-blue-primary">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zelly-text-primary mb-1">이벤트 기간 및 발표</h3>
                  <p className="text-sm text-zelly-text-secondary leading-relaxed">
                    기간: 정식 출시 전까지<br />
                    발표: 서비스 런칭 시 개별 이메일 안내 예정
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Steps Section - Vertical list for cleaner look */}
        <section className="py-20 bg-zelly-bg-primary/30 px-8">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-zelly-text-primary mb-12 text-balance">단 3초면 끝! 참여 방법</h2>
            
            <div className="space-y-8">
              {[
                { step: 1, title: '이메일 입력', desc: '알림을 받을 이메일 주소를\n입력해 주세요.' },
                { step: 2, title: '개인정보 동의', desc: '약관 및 개인정보 수집에\n동의해 주세요.' },
                { step: 3, title: '신청 완료', desc: '런칭 소식과 함께 숙박권\n당첨 기회를 기다려주세요!' }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-5 text-left bg-white p-6 rounded-2xl border border-zelly-border shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-zelly-pink/10 text-zelly-pink flex items-center justify-center text-lg font-black flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-zelly-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-zelly-text-secondary leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 px-8 bg-white border-t border-zelly-border">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10 text-zelly-text-primary">이벤트 신청하기</h3>
            <div className="bg-[#fcfcfc] rounded-3xl p-8 border border-zelly-border shadow-inner">
              <Suspense fallback={<div className="flex justify-center py-10 text-zelly-text-tertiary">로딩 중...</div>}>
                <LeadForm />
              </Suspense>
            </div>

            {/* Simplified Privacy Notice */}
            <div className="mt-12 p-6 bg-zelly-bg-primary/50 rounded-2xl border border-zelly-border">
              <div className="flex items-start gap-2 mb-3 text-zelly-text-secondary">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <h4 className="text-sm font-bold">사전 예약 신청 주의사항</h4>
              </div>
              
              <div className="space-y-3 text-[11px] text-zelly-text-tertiary leading-relaxed">
                <p>
                  • 이메일 주소를 부정확하게 입력할 경우 당첨 안내를 받으실 수 없으며, 이에 따른 불이익은 신청자 본인에게 있습니다.
                </p>
                <p className="text-[10px] opacity-80">
                  • [개인정보 수집 및 이용 동의] 수집 항목(이메일), 목적(서비스 출시 알림 및 경품 추첨), 보유 기간(경품 당첨자 안내 완료 시까지). 귀하는 동의를 거부할 권리가 있으나, 거부 시 이벤트 참여가 제한됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
