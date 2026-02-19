'use client';

import { useEffect, useState } from 'react';
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
          size: 'normal',
        });
      }
    };

    if (window.turnstile) {
      renderTurnstile();
    } else {
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
    <div id="lead-form" className="px-6 py-10 md:p-16 flex flex-col items-center">
      <div className="max-w-xl mx-auto w-full">
        <motion.div {...fadeInUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-zelly-text-primary mb-6 leading-snug tracking-tight">
            ZELLY 사전예약 신청하기
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zelly-pink/10 text-zelly-pink text-xs font-bold tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zelly-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zelly-pink"></span>
              </span>
              LAUNCHING EVENT
            </div>
            
            <p className="text-zelly-text-secondary text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              지금 가장 먼저 신청하고 <br />
              젤리의 런칭 소식을 받아 보세요.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
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
              const email = formData.get('email') as string;
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
                  
                  // GA4 Event tracking (no PII)
                  sendGAEvent({ 
                    event: 'generate_lead', 
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
                  console.error('API Error Detail:', errorData);
                  alert(typeof errorData.detail === 'string' ? errorData.detail : '신청 처리 중 오류가 발생했습니다.');
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
                  name="email"
                  placeholder="이메일 주소를 입력해 주세요"
                  data-testid="lead-form-email-input"
                  required
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
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
              
              <div className="text-zelly-text-tertiary text-[10px] md:text-[11px] leading-relaxed opacity-70 text-center">
                <p>
                  입력하신 정보는 서비스 런칭 알림 및 이벤트 안내를 위해서만 사용됩니다.<br />
                  하단의 <span className="font-semibold underline underline-offset-2">개인정보 수집 및 이용 안내</span>를 반드시 확인해 주세요.
                </p>
              </div>
            </div>
          </form>

          {/* Turnstile Widget - Fully visible and recognizable */}
          <div className="mt-4 md:mt-12 flex justify-center hover:opacity-100 transition-all duration-300 transform scale-[0.8] md:scale-100 origin-center">
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
    </div>
  );
}
