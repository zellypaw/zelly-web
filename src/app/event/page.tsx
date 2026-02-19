'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LeadForm from '@/components/sections/LeadForm';

export default function EventPage() {
  const bgColor = '#F8F9FB';

  React.useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [bgColor]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <main 
        className="min-h-screen overflow-y-auto"
        style={{ backgroundColor: bgColor }}
      >
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden pt-[40px] pb-0 border-b border-zelly-border md:border-b-0">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/event_desktop_hero.webp"
              alt="Hero Background"
              fill
              className="hidden min-[800px]:block object-cover object-center"
              priority
            />
            <Image
              src="/assets/event_mobile_hero.webp"
              alt="Hero Background Mobile"
              fill
              className="block min-[800px]:hidden object-cover object-center"
              priority
            />
          </div>

          <div className="relative z-10 px-6 text-center max-w-[800px] mx-auto pt-12 md:pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-block text-[#15181E] text-xs font-bold tracking-widest mb-6 opacity-60 uppercase">
                Launching Event
              </span>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#15181E] mb-8 tracking-tight leading-[1.15]">
                지금 ZELLY 시작 시<br />
                <span className="text-zelly-pink">초특급 혜택</span> 증정
              </h1>

              <div className="flex flex-col items-center gap-4 mb-10">
                <p className="text-sm md:text-xl text-[#15181E]/60 font-medium leading-relaxed">
                  젤리와 함께 더 특별한 추억을 만들어보세요.
                </p>
                
                {/* Date Range with Blue Accent */}
                <div className="flex items-center gap-3 py-2 px-4 rounded-full bg-white/50 backdrop-blur-sm border border-[#00A3FF]/10 mt-6 ">
                  <span className="text-[#00A3FF] font-bold text-sm tracking-widest uppercase">02.17</span>
                  <div className="w-12 h-[2px] bg-[#00A3FF]/30" />
                  <span className="text-[#00A3FF] font-bold text-sm tracking-widest uppercase">Launch</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </section>

        {/* Redesigned Benefits Section - Step Style */}
        <section id="prize-section" className="pt-8 pb-4 md:pt-12 md:pb-6 px-0 md:px-6">
          <div className="max-w-2xl mx-auto">
            {/* White Container for all benefits */}
            <div className="bg-white rounded-none md:rounded-2xl border-y md:border border-zelly-border shadow-[0_8px_40px_rgba(0,0,0,0.03)] overflow-hidden">
              {[
                {
                  id: 1,
                  title: "소노펫 리조트 숙박권",
                  subtitle: "(추첨 1인)",
                  desc: "소노펫 등 국내 최고급 펫 프렌들리 리조트 숙박권을 드립니다.",
                  image: "/assets/event_benefit_1.png",
                  highlight: "소노펫 리조트"
                },
                {
                  id: 2,
                  title: "클라우드 100G 평생 무료",
                  subtitle: "",
                  desc: "소중한 추억을 가득 담을 수 있는 넉넉한 저장 공간을 제공합니다.",
                  image: "/assets/event_benefit_2.png",
                  highlight: "100G 평생 무료"
                },
                {
                  id: 3,
                  title: "젤리 AI 프리미엄 플랜 1년 이용권",
                  subtitle: "",
                  desc: "ZELLY AI의 프리미엄 기능을 1년 동안 자유롭게 경험해보세요.",
                  image: "/assets/event_benefit_3.png",
                  highlight: "프리미엄 플랜 1년"
                }
              ].map((benefit, index, array) => (
                <div key={benefit.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="px-6 py-10 md:p-16 flex flex-col items-center text-center"
                  >
                    {/* Step Label - Matching Date Range Style (Increased Size) */}
                    <span className="text-[#00A3FF] font-semibold text-base tracking-widest mb-4 uppercase">
                      혜택 0{benefit.id}.
                    </span>

                    {/* Title - Lower font-weight and reduced mobile size */}
                    <h3 className="text-xl md:text-3xl font-extrabold text-[#15181E] mb-8 leading-tight">
                      {benefit.title}
                      {benefit.subtitle && (
                        <span className="block text-zelly-pink text-lg md:text-xl mt-1">{benefit.subtitle}</span>
                      )}
                    </h3>

                    {/* Image Area - Consistent Ratio */}
                    <div className="w-full max-w-md mx-auto relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 border border-zelly-border/50">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-[#15181E]/50 font-medium leading-relaxed max-w-[280px] md:max-w-md">
                      {benefit.desc}
                    </p>
                  </motion.div>

                  {/* Divider - Distinct line slightly away from edges */}
                  {index < array.length - 1 && (
                    <div className="px-6 md:px-20">
                      <div className="h-[1px] w-full bg-[#F1F3F5]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="form-section" className="pt-4 pb-20 md:pt-6 md:pb-32 px-0 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-none md:rounded-2xl border-y md:border border-zelly-border shadow-[0_8px_40px_rgba(0,0,0,0.03)] overflow-hidden">
              <Suspense fallback={<div className="flex justify-center py-20 text-zelly-text-tertiary">로딩 중...</div>}>
                <LeadForm />
              </Suspense>
            </div>

            {/* Simplified Privacy Notice */}
            <div className="mt-8 md:mt-12 p-6 bg-zelly-bg-primary/50 rounded-none md:rounded-2xl border-y md:border border-zelly-border">
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
          
          <div className="w-full mt-8 md:mt-12">
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}
