'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submittedContact, setSubmittedContact] = React.useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  return (
    <section id="lead-form" className="min-h-[80vh] flex items-center snap-start bg-zelly-bg-primary py-24">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-zelly-text-primary mb-6 leading-snug tracking-tight">
            Zelly의 정식 런칭 소식을<br />
            가장 먼저 받아보시겠어요?
          </h2>
          <p className="text-zelly-text-secondary text-base max-w-lg mx-auto leading-relaxed opacity-80">
            사전 신청해주시는 분들께는 정식 서비스 시작일에 맞춰<br />
            감사의 마음을 담은 작은 선물을 함께 보내드립니다.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const contact = formData.get('contact') as string;
              const agreed = formData.get('agree');
              
              if (!agreed) {
                alert('개인정보 수집 및 이용에 동의해주세요.');
                return;
              }
              
              console.log('🎉 사전예약 신청:', { contact, agreed });
              setSubmittedContact(contact);
              setIsSubmitted(true);
              e.currentTarget.reset();
            }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl border border-zelly-border p-2 shadow-sm focus-within:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  name="contact"
                  placeholder="이메일 또는 휴대폰 번호"
                  required
                  pattern="^(01[016789]-?\d{3,4}-?\d{4}|[^\s@]+@[^\s@]+\.[^\s@]+)$"
                  onInvalid={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.setCustomValidity('올바른 휴대폰 번호 또는 이메일 형식을 입력해주세요.');
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.setCustomValidity('');
                  }}
                  className="w-full px-5 py-4 bg-transparent border-none focus:ring-0 text-zelly-text-primary placeholder:text-zelly-text-placeholder text-base"
                />
              </div>

              <button
                type="submit"
                className="bg-zelly-text-primary hover:bg-black text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap"
              >
                신청하기
              </button>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 group cursor-pointer">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                  className="w-4 h-4 rounded border-zelly-border text-zelly-text-primary focus:ring-zelly-text-primary cursor-pointer"
                />
                <label htmlFor="agree" className="text-zelly-text-tertiary text-xs cursor-pointer select-none group-hover:text-zelly-text-secondary transition-colors">
                  개인정보 수집 및 이용에 동의합니다 (필수)
                </label>
              </div>
              
              <p className="text-zelly-text-tertiary text-[11px] leading-relaxed text-center opacity-60">
                * 입력하신 소중한 정보는 서비스 런칭 알림 외에 어떠한 목적으로도 사용되지 않으며,<br />
                런칭 알림 발송 직후 즉시 파기됩니다.
              </p>
            </div>
          </form>
        </motion.div>

        {/* Success Modal */}
        <AnimatePresence>
          {isSubmitted && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSubmitted(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-3xl p-8 md:p-12 max-w-sm w-full shadow-2xl text-center relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-zelly-text-primary mb-3">신청이 완료되었습니다!</h3>
                    <p className="text-zelly-text-secondary text-sm leading-relaxed mb-8">
                      정식 런칭일에 <span className="font-semibold text-zelly-text-primary">{submittedContact}</span>님께<br />
                      가장 먼저 기쁜 소식을 전해드릴게요.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full bg-zelly-text-primary hover:bg-black text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-black/5"
                    >
                      확인
                    </button>
                  </div>

                  {/* Subtle Background Pattern */}
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-zelly-pink/5 rounded-full blur-3xl after:content-['']" />
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
