import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';
import Script from 'next/script';
import { sendGAEvent } from '@next/third-parties/google';
import { trackEvent, identifyUser, setPeopleProperties } from '@/lib/mixpanel';

declare global {
  interface Window {
    turnstile: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
          size?: 'normal' | 'compact' | 'flexible';
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string | undefined;
    };
  }
}

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isConflict, setIsConflict] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  // Cloudflare Turnstile 초기화
  useEffect(() => {
    const renderTurnstile = () => {
      const container = document.getElementById('turnstile-container');
      if (container && window.turnstile) {
        container.innerHTML = '';
        window.turnstile.render('#turnstile-container', {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(null),
          'error-callback': () => setTurnstileToken(null),
        });
      }
    };

    if (window.turnstile) {
      renderTurnstile();
    } else {
      // 스크립트 로드 대기
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          renderTurnstile();
          clearInterval(checkTurnstile);
        }
      }, 500);
      return () => clearInterval(checkTurnstile);
    }
  }, [isSubmitted]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  return (
    <section id="lead-form" className="flex-1 flex items-center bg-zelly-bg-primary pt-32 pb-24 md:pt-20 md:pb-12 min-h-screen md:min-h-0">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-zelly-text-primary mb-6 leading-snug tracking-tight">
            Zelly의 정식 런칭 소식을<br />
            가장 먼저 받아보시겠어요?
          </h2>
          <p className="text-zelly-text-secondary text-base max-w-lg mx-auto leading-relaxed opacity-40">
            사전 신청해주시는 분들께는 정식 서비스 시작일에<br />
            감사의 마음을 담은 작은 선물을 함께 보내드립니다.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <Script 
            src="https://challenges.cloudflare.com/turnstile/v0/api.js" 
            strategy="afterInteractive"
          />
          <form
            data-testid="lead-form"
            onSubmit={async (e) => {
              e.preventDefault();
              if (isLoading) return;

              const formData = new FormData(e.currentTarget);
              const email = formData.get('contact') as string;
              const agreed = formData.get('agree');
              const hpField = formData.get('hp_field') as string;
              
              if (!agreed) {
                alert('개인정보 수집 및 이용에 동의해주세요.');
                return;
              }

              if (!turnstileToken) {
                alert('보안 검증이 진행 중이거나 실패했습니다. 잠시 후 다시 시도해주세요.');
                return;
              }

              setIsLoading(true);
              
              try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/lead/`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email,
                    agreed: true,
                    turnstileToken,
                    metadata: {
                      hp_field: hpField,
                      userAgent: navigator.userAgent,
                      screenSize: `${window.innerWidth}x${window.innerHeight}`,
                      ...(searchParams.get('utm_source') && { utm_source: searchParams.get('utm_source') }),
                      ...(searchParams.get('utm_medium') && { utm_medium: searchParams.get('utm_medium') }),
                      ...(searchParams.get('utm_campaign') && { utm_campaign: searchParams.get('utm_campaign') }),
                      ...(searchParams.get('utm_term') && { utm_term: searchParams.get('utm_term') }),
                      ...(searchParams.get('utm_content') && { utm_content: searchParams.get('utm_content') }),
                      ...(document.referrer && { referrer: document.referrer }),
                    }
                  }),
                });

                if (response.ok) {
                  setSubmittedEmail(email);
                  setIsSubmitted(true);
                  
                  // GA4 Event tracking (no PII, no non-numeric value)
                  sendGAEvent({ 
                    event: 'generate_lead'
                  });

                  // Mixpanel Identification & Event tracking
                  identifyUser(email);
                  setPeopleProperties({
                    $email: email,
                    $created: new Date().toISOString()
                  });
                  
                  trackEvent('Lead Submitted', {
                    timestamp: new Date().toISOString()
                  });
                } else if (response.status === 409) {
                  setSubmittedEmail(email);
                  setIsConflict(true);
                } else {
                  const errorData = await response.json();
                  alert(errorData.detail || '신청 처리 중 오류가 발생했습니다.');
                }
              } catch (error) {
                console.error('API Error:', error);
                alert('서버와 통신 중 오류가 발생했습니다. 네트워크 상태를 확인해주세요.');
              } finally {
                setIsLoading(false);
              }
            }}
            className="space-y-6"
          >
            {/* Honeypot Field (Invisible to users) */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="bg-white rounded-2xl border border-zelly-border p-2 shadow-sm focus-within:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 min-w-0">
                <input
                  type="email"
                  name="contact"
                  placeholder="이메일 주소를 입력해 주세요"
                  required
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  data-testid="lead-form-contact-input"
                  onInvalid={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.setCustomValidity('올바른 이메일 형식을 입력해주세요.');
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
                disabled={isLoading}
                className="bg-zelly-text-primary hover:bg-black text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  '신청하기'
                )}
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
              
              <p className="text-zelly-text-tertiary text-[11px] leading-relaxed text-center opacity-60 break-keep text-balance">
                * 입력하신 소중한 정보는 서비스 런칭 알림 외에 어떠한 목적으로도 사용되지 않으며,<br className="hidden md:block" />
                런칭 알림 발송 직후 즉시 파기됩니다.
              </p>
            </div>
          </form>

          {/* Turnstile Widget */}
          <div className="mt-12 flex justify-center opacity-80 hover:opacity-100 transition-opacity">
            <div id="turnstile-container"></div>
          </div>
        </motion.div>

        {/* Success Modal */}
        <AnimatePresence>
          {(isSubmitted || isConflict) && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setIsSubmitted(false);
                  setIsConflict(false);
                }}
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
                    {isSubmitted ? (
                      <>
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-6">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-zelly-text-primary mb-3">신청이 완료되었습니다!</h3>
                        <p className="text-zelly-text-secondary text-sm leading-relaxed mb-8">
                          정식 런칭일에 <span className="font-semibold text-zelly-text-primary">{submittedEmail}</span>님께<br />
                          가장 먼저 기쁜 소식을 전해드릴게요.
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-500 mb-6">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-zelly-text-primary mb-3">이미 신청되었습니다</h3>
                        <p className="text-zelly-text-secondary text-sm leading-relaxed mb-8">
                          <span className="font-semibold text-zelly-text-primary">{submittedEmail}</span>님은 <br />이미 사전 신청이 완료되었습니다.<br />
                          정식 런칭일에 잊지 않고 소식을 전해드릴게요!
                        </p>
                      </>
                    )}
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setIsConflict(false);
                      }}
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
