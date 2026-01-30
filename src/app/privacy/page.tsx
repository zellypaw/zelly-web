'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zelly-text-primary selection:bg-zelly-pink/20">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-zelly-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-1 text-zelly-text-secondary hover:text-zelly-text-primary transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium">돌아가기</span>
          </Link>
          <div className="flex items-center">
            <Image 
              src="/assets/ZELLY.svg" 
              alt="ZELLY" 
              width={80} 
              height={24} 
              className="h-6 w-auto"
            />
          </div>
          <div className="w-16" /> {/* Spacer for balance */}
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-bold mb-4 tracking-tight">개인정보 처리방침 (사전 예약)</h1>
          <p className="text-zelly-text-secondary leading-relaxed">
            공유형 반려동물 성장앨범 ‘젤리(ZELLY)’(이하 “서비스”)는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하고 관련 고충을 신속하게 처리하기 위해 다음과 같은 처리방침을 수립·공개합니다.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zelly-pink rounded-full" />
              1. 개인정보의 수집 및 이용 목적
            </h2>
            <p className="text-zelly-text-secondary mb-4 leading-relaxed">
              서비스는 다음의 목적을 위해 최소한의 개인정보를 수집합니다. 수집된 정보는 목적 외의 용도로는 이용되지 않으며, 이용 목적이 변경될 경우 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zelly-text-secondary">
              <li><strong>서비스 출시 알림 및 사전 예약:</strong> 정식 서비스 런칭 안내 및 접속 링크 제공</li>
              <li><strong>이벤트 및 마케팅 활용:</strong> 혜택 안내, 프로모션 정보 발송(이메일, 문자 등) 및 참여 확인</li>
              <li><strong>서비스 통계 및 분석:</strong> 이용자의 서비스 이용 기록 분석을 통한 서비스 개선 및 맞춤형 콘텐츠 제공</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zelly-pink rounded-full" />
              2. 수집하는 개인정보 항목
            </h2>
            <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
              <div className="flex justify-between items-start gap-4">
                <span className="font-semibold text-zelly-text-primary whitespace-nowrap">필수항목</span>
                <span className="text-zelly-text-secondary text-right">이메일 주소</span>
              </div>
              <div className="h-px bg-slate-200" />
              <div className="flex justify-between items-start gap-4">
                <span className="font-semibold text-zelly-text-primary whitespace-nowrap">선택항목</span>
                <span className="text-zelly-text-secondary text-right">휴대전화 번호</span>
              </div>
              <div className="h-px bg-slate-200" />
              <div className="flex justify-between items-start gap-4">
                <span className="font-semibold text-zelly-text-primary whitespace-nowrap">자동수집항목</span>
                <span className="text-zelly-text-secondary text-right text-sm">IP주소, 쿠키, 방문 일시, 서비스 이용 기록, 기기 정보</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zelly-pink rounded-full" />
              3. 개인정보의 보유 및 이용 기간
            </h2>
            <p className="text-zelly-text-secondary leading-relaxed">
              수집된 개인정보는 <span className="text-zelly-text-primary font-semibold underline decoration-zelly-pink/30 decoration-4">서비스 정식 출시 후 6개월까지 또는 이용자의 파기 요청 시까지 보유</span>하며, 이후 지체 없이 파기합니다.
              단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zelly-pink rounded-full" />
              4. 개인정보의 파기 절차 및 방법
            </h2>
            <ul className="space-y-4 text-zelly-text-secondary">
              <li className="leading-relaxed"><strong>파기절차:</strong> 목적 달성 후 내부 방침 및 법령에 따라 안전하게 파기합니다.</li>
              <li className="leading-relaxed"><strong>파기방법:</strong> 전자적 파일 형태는 복구가 불가능한 기술적 방법으로 영구 삭제하며, 종이 문서인 경우 분쇄하거나 소각합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zelly-pink rounded-full" />
              5. 이용자의 권리·의무 및 행사 방법
            </h2>
            <p className="text-zelly-text-secondary leading-relaxed mb-4">
              이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.
            </p>
            <p className="text-zelly-text-secondary leading-relaxed">
              권리 행사는 운영진 이메일(<span className="text-zelly-text-primary font-medium">zellypaw@gmail.com</span>)을 통해 서면 또는 전자우편으로 신청하실 수 있으며, 서비스는 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zelly-pink rounded-full" />
              6. 개인정보 자동 수집 장치의 설치·운영 및 거부
            </h2>
            <p className="text-zelly-text-secondary leading-relaxed mb-4">
              서비스는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
            </p>
            <p className="text-zelly-text-secondary leading-relaxed">
              이용자는 웹 브라우저의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다. 단, 쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zelly-pink rounded-full" />
              7. 개인정보의 안전성 확보 조치
            </h2>
            <p className="text-zelly-text-secondary leading-relaxed mb-4">서비스는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-zelly-text-secondary">
              <li><strong>기술적 조치:</strong> 개인정보 암호화 저장, 해킹 등에 대비한 기술적 대책 수립</li>
              <li><strong>관리적 조치:</strong> 개인정보 취급자의 최소화 및 정기적인 교육</li>
            </ul>
          </section>

          <section className="bg-pink-50 rounded-3xl p-8 border border-zelly-pink/10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-zelly-text-primary">
              8. 개인정보 보호책임자 및 고충처리
            </h2>
            <p className="text-zelly-text-secondary mb-6">서비스의 개인정보 처리에 관한 문의는 아래의 담당 부서로 연락해 주시기 바랍니다.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-zelly-pink font-semibold mb-1 uppercase tracking-wider">부서/성명</p>
                <p className="text-zelly-text-primary font-medium">젤리 운영팀</p>
              </div>
              <div>
                <p className="text-xs text-zelly-pink font-semibold mb-1 uppercase tracking-wider">Email</p>
                <p className="text-zelly-text-primary font-medium">zellypaw@gmail.com</p>
              </div>
              <div>
                <p className="text-xs text-zelly-pink font-semibold mb-1 uppercase tracking-wider">공고 및 시행 일자</p>
                <p className="text-zelly-text-primary font-medium">2026년 1월 31일</p>
              </div>
            </div>
          </section>
        </div>
      <p className="text-zelly-text-tertiary text-xs mt-12 pt-8 border-t border-slate-100">
            본 방침은 사전 예약 단계에 적용되며, 서비스 정식 출시 후 가입 시에는 별도의 정식 개인정보 처리방침이 적용됩니다.
          </p>
        </main>

      {/* Footer minimal */}
      <footer className="py-12 border-t border-slate-50 text-center">
        <p className="text-slate-400 text-xs tracking-widest uppercase">© 2026 Zelly Team</p>
      </footer>
    </div>
  );
}
