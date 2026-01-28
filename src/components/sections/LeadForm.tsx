'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export default function LeadForm() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  return (
    <section id="lead-form" className="py-24 md:py-32 bg-zelly-bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          {/* Hook with Gift Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-zelly-pink flex items-center justify-center shadow-lg">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zelly-text-primary mb-6 leading-tight">
            지금 사전 알림 신청하면,<br />
            <span className="text-zelly-pink">&apos;AI 프로필 변신 이용권&apos;</span>
            <br />
            100% 무료로 드립니다.
          </h2>

          <p className="text-zelly-text-secondary text-sm md:text-base">
            출시 알림 외에 다른 목적으로 사용되지 않습니다.
          </p>
        </motion.div>

        {/* Typeform Embed */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zelly-bg-secondary rounded-3xl shadow-2xl p-8 md:p-12 border border-zelly-border"
        >
          {/* Typeform 임베드 placeholder */}
          <div className="text-center">
            <div className="mb-8">
              <div className="w-full bg-zelly-bg-primary rounded-xl p-8">
                <p className="text-zelly-text-primary font-medium mb-4">
                  📝 Typeform 임베드 위치
                </p>
                <p className="text-zelly-text-secondary text-sm mb-6">
                  Typeform에서 폼을 생성 후 아래 형식으로 임베드 코드를 추가하세요:
                </p>
                <div className="bg-zelly-text-primary text-zelly-green font-mono text-xs p-4 rounded-lg text-left overflow-x-auto">
                  <pre>{`<div data-tf-widget="YOUR_FORM_ID" 
     style="width:100%;height:400px;">
</div>
<script src="//embed.typeform.com/next/embed.js">
</script>`}</pre>
                </div>
              </div>
            </div>

            {/* 임시 폼 (Typeform 연동 전까지 사용) */}
            <div className="border-t border-zelly-border pt-8">
              <p className="text-zelly-text-secondary text-sm mb-4">
                또는 임시로 아래 폼을 사용하세요 (콘솔 로그만 출력):
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const contact = formData.get('contact');
                  const agreed = formData.get('agree');
                  
                  if (!agreed) {
                    alert('개인정보 수집 및 이용에 동의해주세요.');
                    return;
                  }
                  
                  console.log('🎉 사전예약 신청:', { contact, agreed });
                  alert(`사전예약이 완료되었습니다!\n연락처: ${contact}`);
                  e.currentTarget.reset();
                }}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    name="contact"
                    placeholder="휴대폰 번호 또는 이메일 입력"
                    required
                    pattern="^(01[016789]-?\d{3,4}-?\d{4}|[^\s@]+@[^\s@]+\.[^\s@]+)$"
                    className="w-full px-6 py-4 border-2 border-zelly-border rounded-xl focus:outline-none focus:border-zelly-pink text-lg bg-zelly-bg-primary"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    required
                    className="mt-1 w-5 h-5 accent-zelly-pink cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-left text-zelly-text-secondary text-sm cursor-pointer">
                    개인정보 수집 및 이용에 동의합니다 (필수)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-zelly-pink text-white font-bold py-4 px-8 rounded-xl hover:bg-zelly-pinkHover hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-lg"
                >
                  무료 쿠폰 받고 사전예약 완료 →
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
