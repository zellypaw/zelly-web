import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Container from '@/components/common/Container';
import Footer from '@/components/sections/Footer';
import { NOTICES } from '@/lib/notices';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return NOTICES.map((notice) => ({
    id: notice.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NoticeDetailPage({ params }: PageProps) {
  const { id } = await params;
  const noticeId = Number(id);
  const notice = NOTICES.find((n) => n.id === noticeId);

  if (!notice) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">공지사항을 찾을 수 없습니다.</h1>
        <Link 
          href="/notice"
          className="px-6 py-2 bg-slate-900 text-white rounded-full"
        >
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-mesh relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zelly-pink/10 rounded-full blur-[120px] animate-pulse"></div>

      <Navbar />
      
      <main className="flex-grow relative z-10 pt-24 md:pt-32 pb-16 md:pb-20">
        <Container>
          <div className="max-w-3xl mx-auto px-4 sm:px-0">
            {/* Category header - Unified with list page style */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 md:mb-14">
              공지사항
            </h1>
            
            {/* Title Section */}
            <div className="mb-8 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight">
                {notice.title}
              </h1>
              <div className="flex items-center gap-3">
                <p className="text-base md:text-lg text-slate-400">
                  {notice.date}
                </p>
                {notice.badge && (
                  <>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-xs md:text-sm font-medium text-zelly-pink bg-zelly-pink/5 px-2 py-0.5 rounded-full border border-zelly-pink/10">
                      {notice.badge}
                    </span>
                  </>
                )}
              </div>
            </div>
            
            {/* Divider */}
            <div className="w-full h-[1px] bg-slate-200/50 mb-8 md:mb-12"></div>
            
            {/* Content Section */}
            <div className="max-w-none">
              <div 
                className="text-slate-700 text-[16px] md:text-lg leading-[1.6] md:leading-relaxed whitespace-pre-wrap break-keep"
                dangerouslySetInnerHTML={{ __html: notice.content }}
              />

              {notice.cta && (
                <div className="mt-10 md:mt-14">
                  <a 
                    href={notice.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-2xl hover:bg-zelly-pink transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-900/10 hover:shadow-zelly-pink/20"
                  >
                    {notice.cta.label}
                  </a>
                </div>
              )}
            </div>

            {/* Back Button */}
            <div className="mt-12 md:mt-20">
              <Link 
                href="/notice"
                className="group inline-flex items-center gap-2 -ml-5 md:-ml-6 px-5 py-2.5 md:px-6 md:py-3 text-slate-500 hover:text-zelly-pink text-sm md:text-base font-bold transition-all"
              >
                <ChevronLeft size={18} className="text-slate-400 group-hover:text-zelly-pink transition-colors" />
                목록으로 돌아가기
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
