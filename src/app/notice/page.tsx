'use client';

import React, { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import Container from '@/components/common/Container';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { NOTICES } from '@/lib/notices';

const ITEMS_PER_PAGE = 6;

export default function NoticePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(NOTICES.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNotices = NOTICES.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3, 4, 5, '...', totalPages);
    }

    return pages.map((page, index) => {
      if (page === '...') {
        return (
          <span key={`dots-${index}`} className="flex items-center justify-center w-10 h-10 text-slate-300">
            <MoreHorizontal size={16} />
          </span>
        );
      }
      return (
        <button
          key={page}
          onClick={() => setCurrentPage(Number(page))}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-medium transition-all ${
            currentPage === page
              ? 'bg-slate-900/5 text-slate-900 font-bold'
              : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
          }`}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-mesh relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      
      {/* Background Blobs for extra depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zelly-pink/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <Navbar />
      
      <main className="flex-grow relative z-10 pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 md:mb-14 px-4 sm:px-0">
              공지사항
            </h1>
            
            <div className="space-y-0 min-h-[400px] md:min-h-[500px]">
              {currentNotices.map((notice) => (
                <Link 
                  key={notice.id} 
                  href={`/notice/${notice.id}`}
                  className="block py-6 md:py-8 px-4 sm:px-0 border-b border-slate-200/40 transition-all group"
                >
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-zelly-pink transition-colors line-clamp-2">
                      {notice.title}
                    </h2>
                    <p className="text-sm md:text-base text-slate-400">
                      {notice.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center text-slate-400 disabled:opacity-20 hover:text-slate-600 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex items-center gap-1">
                  {renderPageNumbers()}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center text-slate-400 disabled:opacity-20 hover:text-slate-600 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
